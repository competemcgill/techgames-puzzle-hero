import { Request, Response } from "express";
import { userDBInteractions } from "../database/interactions/user"
import { statusCodes } from "../util/statusCodes";
import { validationResult } from "express-validator/check";
import { errorMessage } from "../util/errorFormatter";
import { IUserModel, User } from "../database/models/user";
import { IUser } from "../interfaces/user";

const userController = {

    index: async (req: Request, res: Response) => {
        try {
            const users = await userDBInteractions.all();
            res.status(statusCodes.SUCCESS).send(users);
        } catch (error) {
            res.status(statusCodes.SERVER_ERROR).send(error);
        }
    },

    show: async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(statusCodes.MISSING_PARAMS).json(errors.formatWith(errorMessage).array()[0]);
        } else {
            try {
                const foundUser: IUserModel = await userDBInteractions.find(req.params.userId);
                if (foundUser) res.status(statusCodes.SUCCESS).send(foundUser);
            } catch (error) {
                res.status(statusCodes.SERVER_ERROR).send(error);
            }
        }
    },

    create: async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(statusCodes.MISSING_PARAMS).json(errors.formatWith(errorMessage).array()[0]);
        } else {
            try {
                const foundUser: IUserModel = await userDBInteractions.find(req.params.userId);
                if (foundUser) res.status(statusCodes.BAD_REQUEST).send({ msg: "User already exists" });
                const userData: IUser = {
                    ...req.body,
                };
                const newUser: IUserModel = await userDBInteractions.create(new User(userData));
                newUser.toJSON();
                res.status(statusCodes.SUCCESS).send(newUser);

            } catch (error) {
                res.status(statusCodes.SERVER_ERROR).send(error);
            }
        }
    },

    delete: async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(statusCodes.MISSING_PARAMS).json(errors.formatWith(errorMessage).array()[0]);
        } else {
            try {
                const user = await userDBInteractions.find(req.params.userId);
                if (user) {
                    await userDBInteractions.delete(req.params.userId);
                    res.status(statusCodes.SUCCESS).send(user);
                } else {
                    res.status(statusCodes.NOT_FOUND).send({ status: statusCodes.NOT_FOUND, message: "User not found" });
                }
            } catch (error) {
                res.status(statusCodes.SERVER_ERROR).send(error);
            }
        }
    }
};

export { userController };