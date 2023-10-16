import prisma from "../config/database";
import { createUserType } from "services/users-service";

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

export const userRepository = {
  findByEmail,
  create
}