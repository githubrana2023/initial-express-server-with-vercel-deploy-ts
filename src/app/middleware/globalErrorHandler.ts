/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from "express";
import sendResponse from "../utils/sendResponse";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    return sendResponse(
        res,
        {
            data: null,
            message: err.message || 'Something went wrong from global error handler',
            statusCode: err.statusCode || 500,
            success: false
        }
    )
};

export default globalErrorHandler;