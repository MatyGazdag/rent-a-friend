import jwt, { type SignOptions } from "jsonwebtoken";
import type { Response } from "express";
import dotenv from 'dotenv';

const __7DAYEXP = (1000 * 60 * 60 * 24 * 7);

export interface TokenPayloud
{
    id: string
}

export const GenerateNewToken = (userID: string, res: Response) => {
    const payload: TokenPayloud = {id: userID};

    const secret = process.env.JWT_KEY || "";
    if (!secret) {
        throw new Error("JWT_KEY is missing in environment variables");
    }

    const options: SignOptions = {
        expiresIn: __7DAYEXP || "7D",
    }

    const token = jwt.sign(payload, secret, options);

    res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: __7DAYEXP
    });

    return token;
}