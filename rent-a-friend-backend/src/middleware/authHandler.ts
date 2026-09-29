import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { FindUserByUUID } from "../db/repositories/userRepository";
import type { TokenPayloud } from "../utils/tokenGen";

export const authHandler = async (req: Request, res: Response, next: NextFunction) => {
    console.log("Auth middleware working");

    const authHeader = req.headers.authorization;

    let token: string | undefined;

    if (authHeader || authHeader?.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
    }else if(!req.cookies?.jwt) {
        token = req.cookies.jwt;
    }
    console.log(token);

    if(!token)
    {
        return res.status(401).json({
            status: "error",
            message: 'Unauthorized: No token provided' 
        });
    }

    try {
        const secret = process.env.JWT_KEY || "";
        console.log(secret);
        const decoded = jwt.verify(token, secret) as TokenPayloud;

        const user = await FindUserByUUID(decoded.id);

        if(!user)
        {
            return res.status(401).json({
                status: "error",
                message: 'User no longer exists' 
            });
        }

        next();
    } catch (error) {
        return res.status(401).json({
            status: "error",
            message: error
        });
    }
};