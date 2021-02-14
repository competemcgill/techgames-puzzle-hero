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
            res.status(statusCodes.MISSING_PARAMS).json(errors.formatWith(errorMessage).array()[0]);
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
            res.status(statusCodes.MISSING_PARAMS).json(errors.formatWith(errorMessage).array()[0]);
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
            res.status(statusCodes.MISSING_PARAMS).json(errors.formatWith(errorMessage).array()[0]);
            return
        } else {
            try {
                const foundPuzzle: IPuzzleModel = await puzzleDBInteractions.getAnswer(req.params.puzzleId);
                if (!foundPuzzle) {
                    res.status(statusCodes.NOT_FOUND).json({
                        success: false,
                        message: "Puzzle not found"
                    })
                    return
                }
                let team: ITeam = await teamDBInteractions.find(req.body.teamId)
                if (!team) {
                    res.status(statusCodes.NOT_FOUND).json({
                        success: false,
                        message: "Team not found"
                    })
                    return
                }

                let index = team.puzzles.findIndex(obj => obj.puzzleId == req.params.puzzleId)
                if (team.puzzles[index].completed == "COMPLETED") {
                    res.status(statusCodes.SUCCESS).json({
                        success: true,
                        message: "Puzzle already answered correctly"
                    })
                    return
                }

                if (foundPuzzle.answer.toLowerCase() == req.body.answer.toLowerCase()) {
                    if (index != -1) {
                        team.puzzles[index].completed = "COMPLETED"
                        team.score += 1
                        for (const nextPuzzleTitle of foundPuzzle.next) {
                            let nextIndex = team.puzzles.findIndex(obj => obj.title == nextPuzzleTitle);
                            team.puzzles[nextIndex].completed = "UNLOCKED";
                        }
                        const newTeam: ITeamModel = await teamDBInteractions.update(req.body.teamId, team)
                    } else if (index == -1) {
                        return res.status(statusCodes.SERVER_ERROR).json({ error: "Puzzle not found in team object" });
                    }
                    res.status(statusCodes.SUCCESS).json({
                        success: true,
                        message: "Answer is correct!"
                    })
                } else {
                    res.status(statusCodes.SUCCESS).json({
                        success: false,
                        message: "Answer is incorrect :("
                    })
                    return
                }
            } catch (error) {
                console.log(`Error: ${error}`)
                res.status(statusCodes.SERVER_ERROR).json(error);
            }
        }
    }

};

export { puzzleController };