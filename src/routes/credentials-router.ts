import { Router } from "express";
import { authenticateToken } from "../middlewares/authentication-middleware";
import { validateSchema } from "../middlewares/validate-schema";
import { createCredentialSchema } from "../schemas/credential-schema";
import { credentialController } from "../controller/credential-controller";

const credentialRouter = Router()

credentialRouter.post("/credential", authenticateToken, validateSchema(createCredentialSchema), credentialController.createCredential)
credentialRouter.get("/credential", authenticateToken, credentialController.getCredential)
credentialRouter.delete("/credential/:id", authenticateToken, credentialController.deleteCredential)

export {credentialRouter}