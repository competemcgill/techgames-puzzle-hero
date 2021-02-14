import { ITeam } from "../../interfaces/team";
import { Schema, Document, Model, model } from "mongoose";

export interface ITeamModel extends ITeam, Document { }

const teamSchema: Schema = new Schema({
    name: {
        type: String,
        unique: true
    },
    users: [{
        type: String
    }],
    puzzles: [{
        puzzleId: Schema.Types.ObjectId,
        completed: Boolean
    }],
    score: {
        type: Number,
    }

});

const Team: Model<ITeamModel> = model<ITeamModel>("Team", teamSchema);

export { Team };