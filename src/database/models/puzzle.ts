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
    },
    next: [{
        type: String,
        // type: Schema.Types.ObjectId,
        // ref: "Puzzle"
    }]
});

const Puzzle: Model<IPuzzleModel> = model<IPuzzleModel>("Puzzle", puzzleSchema);

export { Puzzle };