import { Router } from "express";
import { usersRouter } from "./users-router";

const routers = Router()
routers.use(usersRouter)

export default routers