import bcrypt from "bcryptjs";
import { FindUserByUsernamme, CreateUser } from "../db/repositories/userRepository";
import type { Request, Response } from "express";
import { GenerateNewToken } from "../utils/tokenGen";

export const register = async (req: Request, res: Response) => {
    const user = await FindUserByUsernamme(req.body.username);
    if(user != null) {
        return res.status(400).json({
            status: "error", 
            message: "User already exists"
        });
    }
    
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
    await CreateUser({
        ...req.body,
        password: hashedPassword
    });
    
    return res.status(201).json({
        status: "success", 
        message: 'User created successfully' 
    });
};

export const login = async (req: Request, res: Response) => {
    const user = await FindUserByUsernamme(req.body.username);
    if(user == null) return res.status(400).json({message: "User does not exists"});
    
    const result = await bcrypt.compareSync(req.body.password, user.password);

    if(!result)
    {
        return res.status(400).json({
            status: "error", 
            message: 'Wrong password' 
        });
    }

    const token = GenerateNewToken(user.id, res);
    
    return res.status(201).json({
        status: "success", 
        data: {
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            },
            token: token
        }
    });
};

export const logout = async (req: Request, res: Response) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0)
    });

    res.status(200).json({
        status: "success", 
        message: 'Logged out successfully' 
    });
}