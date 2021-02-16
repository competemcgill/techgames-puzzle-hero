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
    },

    secretAuth: (req: Request, res: Response, next: NextFunction) => {
        const secret: any = req.headers["x-secret"];

        if (secret === process.env.HARD_CODED_SECRET) {
            next()
        } else {
            console.log(`${secret} is not the valid hard-coded secret`)
            res.status(statusCodes.UNAUTHORIZED).send({ status: 401, message: "Unauthorized" });
        }
    }
}