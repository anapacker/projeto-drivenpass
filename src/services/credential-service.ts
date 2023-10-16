import { Credential } from "@prisma/client";
import { credentialRepository } from "../repository/credential-repository";
import { ConflictError } from "../errors/conflict-error";
import { notFoundError } from "../errors/not-found-error";

export type credentialType = Omit<Credential, "id">

async function createCredential(data:credentialType) {
  const existsCredential = await credentialRepository.getCredentialByTitle(data.userId)
  if(existsCredential) throw ConflictError()

  
  const infosCredential: credentialType = {
    username: data.username,
    password:data.password,
    userId: data.userId,
    title:data.title,
    url:data.url
  }
  await credentialRepository.createCredential(infosCredential)
}

async function deleteCredentialById(credentialId:number, userId:number){
  const credential = await credentialRepository.getCredentialById(credentialId,userId)
  if(!credential){
    throw notFoundError()
  }
  await credentialRepository.deleteCredential(credentialId, userId)
}

async function getCredentials(userId:number) {
  const credentials = await credentialRepository.getCredentialByTitle(userId)
  return credentials
}

export const credentialServices = {
  createCredential,
  deleteCredentialById,
  getCredentials
  
}