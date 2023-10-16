import { User } from "@prisma/client";
import bcrypt from 'bcrypt'
import { userRepository } from "../repository/user-repository";

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


export const userService = {
  createUser
}