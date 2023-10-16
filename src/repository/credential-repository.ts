import { credentialType } from "../services/credential-service";
import prisma from "../config/database";

async function getCredentialByTitle( userId:number) {
  const credential = await prisma.credential.findMany({where:{ userId}})
  return credential
}

async function createCredential(data:credentialType) {
  await prisma.credential.create({data})
}

async function deleteCredential(credentialId:number, userId: number) {
  await prisma.credential.delete({where:{id:credentialId, userId}})
}

async function getCredentialById(id:number, userId:number) {
  const credential = await prisma.credential.findFirst({
    where:{
      id,
      userId
    },
    select:{
      id:true,
      username: true,
      title: true,
      password: true,
      url: true
    }
  })
  return credential
}

export const credentialRepository = {
  getCredentialByTitle,
  createCredential,
  deleteCredential,
  getCredentialById
}
