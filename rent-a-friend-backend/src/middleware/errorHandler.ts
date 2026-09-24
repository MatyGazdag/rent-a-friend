import type { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
    console.error(error.stack)
    res.status(500).json({
        error: 'Something went wrong... Sorry',
    });
};

export default errorHandler;