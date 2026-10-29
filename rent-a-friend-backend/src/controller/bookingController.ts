import type { Request, Response } from "express"
import { CreateBooking } from "../db/repositories/bookingRepository";

export const bookTime = async (req: Request, res: Response) => {
    

    //await CreateBooking();
};

export const testAuth = async (req: Request, res: Response) => {
    res.status(200).json({
        status: "success",
        message: 'Auth works!!!!' 
    })
};