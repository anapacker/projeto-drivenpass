import prisma from "config/database";

async function getCredentialByUserId(userId:number) {
  const credentials = await prisma.credential.findMany({
    where:{
      userId
    },
    select:{
      id: true,
      title:true,
      url:true,
      username: true,
      password:true,
    }
  })
  return credentials
}

export const authRepository = {
  getCredentialByUserId
}