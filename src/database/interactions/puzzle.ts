import { IPuzzle } from "../../interfaces/puzzle";
import { Puzzle, IPuzzleModel } from "../models/puzzle";

export const puzzleDBInteractions = {
    create: (puzzle: IPuzzle): Promise<IPuzzleModel> => {
        return Puzzle.create(puzzle);
    },
    all: (): Promise<IPuzzleModel[]> => {
        return Puzzle.find({}).exec();
    },
    find: (puzzleId: string): Promise<IPuzzleModel> => {
        return Puzzle.findOne({ _id: puzzleId }).exec();
    },
    getAnswer: (puzzleId: string): Promise<IPuzzleModel> => {
        return Puzzle.findOne({ _id: puzzleId }).select('+answer').exec();
    },
    findByTitle: (title: string,): Promise<IPuzzleModel> => {
        return Puzzle.findOne({ title: title }).exec();
    },
    update: (puzzleId: string, newPuzzle: IPuzzle): Promise<IPuzzleModel> => {
        return Puzzle.findByIdAndUpdate(puzzleId, newPuzzle, { new: true }).exec();
    },
    delete: (puzzleId: string): Promise<IPuzzleModel> => {
        return Puzzle.findByIdAndDelete(puzzleId).exec();
    },
};