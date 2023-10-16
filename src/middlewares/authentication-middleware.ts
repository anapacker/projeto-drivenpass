import { UnauthorizedError } from "../errors/unauthorized-error";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { userRepository } from "../repository/user-repository";

export async function authenticateToken(req: Request, res:Response, next:NextFunction) {
  const auth = req.headers.authorization
  const token = auth?.replace('Bearer ', "")
  if(!token){
    throw UnauthorizedError()
  }
  const jwtKey = process.env.JWT_SECRET

  if(jwt.verify(token, jwtKey)){
    res.locals.userData = jwt.decode(token)
  }

  const session = await userRepository.getSessionByUserId(res.locals.userData.data.userId)

  if(!session){
    throw UnauthorizedError()
  }
  next()
}