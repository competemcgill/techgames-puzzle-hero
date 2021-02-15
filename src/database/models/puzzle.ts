import { IPuzzle } from "../../interfaces/puzzle";
import { Schema, Document, Model, model } from "mongoose";

export interface IPuzzleModel extends IPuzzle, Document { }

const puzzleSchema: Schema = new Schema({
    title: {
        type: String,
        unique: true
    },
    description: {
        type: String,
    },
    answer: {
        type: String,
        select: false
    },
    category: {
        type: String,
        enum: ['Memes', 'McGill', 'Video Games', 'CS History', 'Algo Runtimes', 'Pop Culture', 'Competitive Programming', 'Uncategorized'],
        default: 'Uncategorized'
    },
    next: [{
        type: String,
    }]
});

const Puzzle: Model<IPuzzleModel> = model<IPuzzleModel>("Puzzle", puzzleSchema);

export { Puzzle };