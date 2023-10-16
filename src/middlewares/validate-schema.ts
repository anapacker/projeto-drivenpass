import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export function validateSchema(schema: ObjectSchema) {

  function validate(req: Request, res:Response, next:NextFunction) {

      const validation = schema.validate(req.body, { abortEarly: false })

      if (validation.error) {
          const errors = validation.error.details.map(detail => detail.message)
          return res.status(400).send(errors)
      }
      next()
  }

  return validate;
}