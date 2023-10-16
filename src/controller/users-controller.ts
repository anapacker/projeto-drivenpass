import { Request, Response } from "express";
import httpStatus from "http-status";
import { createUserType, userService } from "../services/users-service";

async function userPost(req: Request, res:Response) {
  const infos: createUserType = req.body

  const user = await userService.createUser(infos)
  res.status(httpStatus.CREATED).send(user)
  
}
export const userController = {
  userPost
}