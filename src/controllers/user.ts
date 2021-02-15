import { Request, Response } from "express";
import { userDBInteractions } from "../database/interactions/user"
import { statusCodes } from "../util/statusCodes";
import { validationResult } from "express-validator/check";
import { errorMessage } from "../util/errorFormatter";
import { IUserModel, User } from "../database/models/user";
import { IUser } from "../interfaces/user";
import { bcryptPassword } from "../util/bcrypt";
import * as jwt from 'jsonwebtoken';

const userController = {

    index: async (req: Request, res: Response) => {
        try {
            const users = await userDBInteractions.all();
            res.status(statusCodes.SUCCESS).send(users);
        } catch (error) {
            console.log(error)
            res.status(statusCodes.SERVER_ERROR).send(error);
        }
    },

    login: async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(statusCodes.MISSING_PARAMS).json(errors.formatWith(errorMessage).array()[0]);
        } else {
            try {
                const foundUser: IUserModel = await userDBInteractions.findByEmail(req.body.email, "+password")
                if (foundUser) {
                    if (bcryptPassword.validate(req.body.password, foundUser.password)) {
                        const token = jwt.sign(
                            {
                                id: foundUser._id,
                                email: foundUser.email
                            },
                            process.env.SECRET
                        );

                        res.status(statusCodes.SUCCESS).send({
                            success: true,
                            email: req.body.email,
                            teamId: foundUser.teamId,
                            token: token,
                            message: "Success, logged in"
                        })
                    }
                    else
                        res.status(statusCodes.UNAUTHORIZED).send({
                            success: false,
                            message: "Invalid credentials"
                        })
                } else {
                    res.status(statusCodes.NOT_FOUND).send({
                        success: false,
                        message: "User not found"
                    })
                }

            } catch (error) {
                console.log(error)
                res.status(statusCodes.SERVER_ERROR).send(error);
            }
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
                else res.status(statusCodes.NOT_FOUND).send({
                    success: false,
                    message: "User not found"
                })
            } catch (error) {
                console.log(error)
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
                const foundUser: IUserModel = await userDBInteractions.findByEmail(req.body.email);
                if (foundUser) {
                    res.status(statusCodes.BAD_REQUEST).send({ msg: "User already exists" });
                    return
                }
                const userData: IUser = {
                    email: req.body.email,
                    password: bcryptPassword.generateHash(req.body.password),
                    teamId: null
                };
                const newUser: IUserModel = await userDBInteractions.create(new User(userData));
                newUser.toJSON();
                res.status(statusCodes.SUCCESS).send(newUser);

            } catch (error) {
                console.log(error)
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
                console.log(error)
                res.status(statusCodes.SERVER_ERROR).send(error);
            }
        }
    }
};

export { userController };