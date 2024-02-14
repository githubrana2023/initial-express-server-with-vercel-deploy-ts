import { Request, Response } from "express";
import sendResponse from "../utils/sendResponse";



const notFound = async (req: Request, res: Response) => {

    return sendResponse(
        res,
        {
            data: null,
            message: 'Api not found',
            statusCode: 404,
            success: false
        }
    )

};

export default notFound;