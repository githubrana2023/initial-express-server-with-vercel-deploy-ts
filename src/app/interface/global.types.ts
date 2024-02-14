/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from "express";
import { StatusCodes } from "http-status-codes";

/**
 *  =================================================================
 *^     *****************  SEND RESPONSE TYPE  **********************
 *  =================================================================
 */


export type SendResponseData<T> = {
    success: boolean;
    statusCode: StatusCodes;
    message: string;
    data: T
}

export type SendResponseFn = <T>(res: Response, data: SendResponseData<T>) => any