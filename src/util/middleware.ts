import { Request, Response, NextFunction } from "express";
import { statusCodes } from "./statusCodes";
import * as jwt from 'jsonwebtoken';

export const middleware = {
    auth: (req: Request, res: Response, next: NextFunction) => {
        const token: any = req.headers["x-auth"];

        try {
            const payload = jwt.verify(token, process.env.SECRET);
            next();
        } catch (e) {
            console.log(e)
            res.status(statusCodes.UNAUTHORIZED).send({ status: 401, message: "Unauthorized" });
        }
    }
}