import { Request, Response } from "express";
import { statusCodes } from "../util/statusCodes";
import { puzzleDBInteractions } from "../database/interactions/puzzle";
import { validationResult } from "express-validator/check";
import { errorMessage } from "../util/errorFormatter";
import { IPuzzleModel, Puzzle } from "../database/models/puzzle";
import { IPuzzle } from "../interfaces/puzzle";
import { ITeamModel, Team } from "../database/models/team";
import { ITeam } from "../interfaces/team";
import { teamDBInteractions } from "../database/interactions/team";

const puzzleController = {

    index: async (req: Request, res: Response) => {
        try {
            const puzzles = await puzzleDBInteractions.all();
            res.status(statusCodes.SUCCESS).send(puzzles);
        } catch (error) {
            res.status(statusCodes.SERVER_ERROR).send(error);
        }
    },

    show: async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(statusCodes.MISSING_PARAMS).json(errors.formatWith(errorMessage));
        } else {
            try {
                const foundPuzzle: IPuzzleModel = await puzzleDBInteractions.find(req.params.puzzleId);
                if (foundPuzzle) res.status(statusCodes.SUCCESS).send(foundPuzzle);
            } catch (error) {
                res.status(statusCodes.SERVER_ERROR).send(error);
            }
        }
    },

    // params: puzzleTitle
    showByTitle: async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(statusCodes.MISSING_PARAMS).json(errors.formatWith(errorMessage));
        } else {
            try {
                const foundPuzzle: IPuzzleModel = await puzzleDBInteractions.findByTitle(req.params.puzzleTitle);
                if (foundPuzzle) res.status(statusCodes.SUCCESS).send(foundPuzzle);
            } catch (error) {
                res.status(statusCodes.SERVER_ERROR).send(error);
            }
        }
    },

    // param: puzzleId
    // body: teamId, answer 
    checkAnswer: async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(statusCodes.MISSING_PARAMS).json(errors.formatWith(errorMessage));
        } else {
            try {
                const foundPuzzle: IPuzzleModel = await puzzleDBInteractions.find(req.params.puzzleId);
                // TODO: update team score if correct
                // let team: ITeam = await teamDBInteractions.find(req.body.teamId)
                if (foundPuzzle.answer == req.body.answer) {
                    // const newTeam: ITeamModel = await teamDBInteractions.update(req.body.teamId, team)
                    res.status(statusCodes.SUCCESS).send({
                        success: true,
                        message: "Answer is correct!"
                    })
                } else {
                    res.status(statusCodes.SUCCESS).send({
                        success: false,
                        message: "Answer is incorrect :("
                    })
                }
            } catch (error) {
                res.status(statusCodes.SERVER_ERROR).send(error);
            }
        }
    }

};

export { puzzleController };