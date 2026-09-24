import { Router } from "express";
import { db } from "../db/db";
import bcrypt from "bcryptjs";
import { FindUserByUsernamme, CreateUser } from "../db/repositories/userRepository";
import {userBodyReqSchem} from '@rentafriend/shared'

const userRouter = Router();

userRouter.get('/:uuid', (req, res) => {
    
});

userRouter.post('/new',async (req,res) => {
    const result = userBodyReqSchem.safeParse(req.body);
    if(!result.success) return res.status(400).json(result.error);

    const validData = result.data;

    const users = await FindUserByUsernamme(validData.username);
    if(users != null) return res.status(400).json({message: "User already exists"});

    const hashedPassword = await bcrypt.hash(validData.password, 10);

    await CreateUser({
        ...validData,
        password: hashedPassword
    });

    return res.status(201).json({ message: 'User created successfully' });
});

export default userRouter;