import { userController } from '../controller/users-controller';
import { Router } from 'express';
import { createUserSchema } from '../schemas/user-schemas';
import { validateSchema } from '../middlewares/validate-schema';
import { authenticateToken } from '../middlewares/authentication-middleware';


const usersRouter = Router();

usersRouter.post('/signup', authenticateToken, validateSchema(createUserSchema), userController.userPost );
usersRouter.post('/signin', authenticateToken, validateSchema(createUserSchema), userController.signin);

export { usersRouter };