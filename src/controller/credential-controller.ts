import { Request, Response } from "express";
import httpStatus from "http-status";
import { credentialRepository } from "../repository/credential-repository";
import { credentialServices, credentialType } from "../services/credential-service";

async function createCredential(req:Request, res: Response) {
  const infos: credentialType = req.body
  infos.userId = +res.locals.userData.data.userId

  await credentialServices.createCredential(infos)

  res.status(httpStatus.CREATED).send(infos)
}

async function getCredential(req:Request, res: Response) {
  const userId = +res.locals.userData.data.userId
  const credentials = await credentialRepository.getCredentialByTitle(userId)

  res.send(credentials)
}

async function deleteCredential(req:Request, res: Response) {
  const credentialId = +req.params.id
  const userId = +res.locals.userData.data.userId

  await credentialRepository.deleteCredential(credentialId,userId)

  res.status(httpStatus.OK).send()
}

export const credentialController = {
  createCredential,
  getCredential,
  deleteCredential
}