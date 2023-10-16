import Joi from "joi";
import { credentialType } from "../services/credential-service";

export const createCredentialSchema = Joi.object<credentialType>({
  username:Joi.string().required(),
  title:Joi.string().required(),
  password:Joi.string().min(10).required(),
  url:Joi.string().uri().required(),
})
