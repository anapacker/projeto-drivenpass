import prisma from "../config/database";
import { createUserType } from "../services/users-service";

async function findByEmail(email:string) {
  return await prisma.user.findFirst({
    where:{email}
  })
}

async function create(data: createUserType) {
  return prisma.user.create({
    data,
  })
}

async function getSessionByUserId(id:number) {
  return await prisma.session.findFirst({where:{id}})
}

async function createSession(userId: number){
const {id} = await prisma.session.create({data:{userId}})
return id
}

export const userRepository = {
  findByEmail,
  create,
  createSession,
  getSessionByUserId
}