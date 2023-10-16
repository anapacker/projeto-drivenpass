import { Router } from "express";
import { usersRouter } from "./users-router";
import { credentialRouter } from "./credentials-router";

const routers = Router()
routers.use(usersRouter)
routers.use(credentialRouter)

export default routers