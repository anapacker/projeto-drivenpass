import { userController } from '../controller/users-controller';
import { Router } from 'express';
import { createUserSchema } from '../schemas/user-schemas';
import { validateSchema } from '../middlewares/validate-schema';


const usersRouter = Router();

usersRouter.post('/signup', validateSchema(createUserSchema), userController.userPost );
usersRouter.post('/signin', validateSchema(createUserSchema), userController.signin);

export { usersRouter };