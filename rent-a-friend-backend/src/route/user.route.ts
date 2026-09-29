import { Router } from "express";
import { validationHandler } from "../middleware/validationHandler";
import { userBodyReqSchem } from "@rentafriend/shared";
import { register, login, logout } from '../controller/authController';

const userRouter = Router();

userRouter.post('/register', validationHandler(userBodyReqSchem), register);

userRouter.post('/login', validationHandler(userBodyReqSchem), login);

userRouter.get('/logout', validationHandler(userBodyReqSchem), logout)

export default userRouter;