import { Request, Response } from "express";
import { statusCodes } from "../util/statusCodes";
import { teamDBInteractions } from "../database/interactions/team";
import { validationResult } from "express-validator/check";
import { errorMessage } from "../util/errorFormatter";
import { ITeamModel, Team } from "../database/models/team";
import { ITeam, ITeamPuzzle } from "../interfaces/team";
import { userDBInteractions } from "../database/interactions/user";
import { puzzleDBInteractions } from "../database/interactions/puzzle";

const teamController = {

    index: async (req: Request, res: Response) => {
        try {
            const teams = await teamDBInteractions.all();
            res.status(statusCodes.SUCCESS).send(teams);
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
                const foundTeam: ITeamModel = await teamDBInteractions.find(req.params.teamId);
                if (foundTeam)
                    res.status(statusCodes.SUCCESS).send(foundTeam);
                else res.status(statusCodes.NOT_FOUND).send({
                    success: false,
                    message: "Team not found"
                })
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
                const foundTeam: ITeamModel = await teamDBInteractions.findByName(req.body.name);
                if (foundTeam) {
                    res.status(statusCodes.BAD_REQUEST).send({ msg: "Team already exists" });
                    return
                }
                const teamData: ITeam = {
                    ...req.body,
                    name: req.body.name,
                    users: [],
                    score: 0,
                    puzzles: []
                };
                const puzzles = await puzzleDBInteractions.all();
                for (const puzzle of puzzles) {
                    const newPuzzle: ITeamPuzzle = {
                        completed: "LOCKED",
                        title: puzzle.title,
                        puzzleId: puzzle._id
                    }
                    if (puzzle.title == "0") {
                        newPuzzle.completed = "UNLOCKED"
                    }
                    teamData.puzzles.push(newPuzzle)
                }
                const newTeam: ITeamModel = await teamDBInteractions.create(new Team(teamData));
                newTeam.toJSON();
                res.status(statusCodes.SUCCESS).send(newTeam);

            } catch (error) {
                res.status(statusCodes.SERVER_ERROR).send(error);
            }
        }
    },

    addUser: async (req: Request, res: Response) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(statusCodes.MISSING_PARAMS).json(errors.formatWith(errorMessage).array()[0]);
        } else {
            try {
                const user = await userDBInteractions.findByEmail(req.body.email);
                if (user) {
                    const team = await teamDBInteractions.find(req.params.teamId);
                    if (team) {
                        team.users.push(user.email)
                        await teamDBInteractions.update(req.params.teamId, team);
                        user.teamId = team._id;
                        await user.save();
                        res.status(statusCodes.SUCCESS).send(team);
                    } else {
                        res.status(statusCodes.NOT_FOUND).send({ status: statusCodes.NOT_FOUND, message: "Team not found" });
                        return
                    }
                } else {
                    res.status(statusCodes.NOT_FOUND).send({ status: statusCodes.NOT_FOUND, message: "User not found" });
                    return
                }

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
                const team = await teamDBInteractions.find(req.params.teamId);
                if (team) {
                    await teamDBInteractions.delete(req.params.teamId);
                    res.status(statusCodes.SUCCESS).send(team);
                } else {
                    res.status(statusCodes.NOT_FOUND).send({ status: statusCodes.NOT_FOUND, message: "Team not found" });
                }
            } catch (error) {
                res.status(statusCodes.SERVER_ERROR).send(error);
            }
        }
    }
};

export { teamController };