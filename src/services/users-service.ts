import { User } from "@prisma/client";
import bcrypt from 'bcrypt'
import { userRepository } from "../repository/user-repository";
import { UnauthorizedError } from "../errors/unauthorized-error";
import jwt from "jsonwebtoken";

export type createUserType = Omit<User, 'id' | 'credential'>

async function createUser(infos: createUserType) {
  const emailExist = await userRepository.findByEmail(infos.email)
  
  if(emailExist) {
    throw {name:"ConflictError", message: "Email já cadastrado."}
  }

  const hashPassword = bcrypt.hashSync(infos.password, 12)
  infos.password =hashPassword
  await userRepository.create(infos)
}
async function signinService(infos: createUserType) {
  const user =  await userRepository.findByEmail(infos.email)
  if(!user){
    throw UnauthorizedError()
  }
  if(bcrypt.compareSync(infos.password, user.password)){
    const session = await userRepository.createSession(user.id)
    const token = jwt.sign({data: {session:session, userId:user.id }}, process.env.JWT_SECRET || "")
    return {token, userId:user.id}
  }
  throw UnauthorizedError()
}


export const userService = {
  createUser,
  signinService
}