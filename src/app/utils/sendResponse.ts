import { SendResponseFn } from "../interface/global.types"

const sendResponse: SendResponseFn = (res, { statusCode, ...data }) => {
    return res.status(statusCode).json(data)
};

export default sendResponse;