import { Router } from 'express';
import userController from '../controllers/UserController';
import { checkAuthMiddleware } from '../middleware';

const userRouter = Router();

userRouter.post('/registration', userController.registration);
userRouter.post('/login', userController.login);
userRouter.get('/auth', checkAuthMiddleware, userController.checkAuth);

export default userRouter;
