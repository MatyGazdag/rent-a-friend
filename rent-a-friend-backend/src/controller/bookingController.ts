import type { Request, Response } from "express"

export const bookTime = async (req: Request, res: Response) => {
    
};

export const testAuth = async (req: Request, res: Response) => {
    res.status(200).json({
        status: "success",
        message: 'Auth works!!!!' 
    })
};