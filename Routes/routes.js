import express from 'express';
import { Login, Signup } from '../Controller/userAuth.Controller.js';
 export const userRouter = express.Router();

userRouter.post('/login',Login);
userRouter.post('/signup',Signup);