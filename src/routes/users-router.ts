import { userController } from '../controller/users-controller';
import { Router } from 'express';
import { createUserSchema } from '../schemas/user-schemas';
import { validateSchema } from '../middlewares/validate-schema';


const usersRouter = Router();

usersRouter.post('/users', validateSchema(createUserSchema), userController.userPost );

export { usersRouter };