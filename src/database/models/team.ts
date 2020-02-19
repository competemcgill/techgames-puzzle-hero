import { ITeam } from "../../interfaces/team";
import { Schema, Document, Model, model } from "mongoose";

export interface ITeamModel extends ITeam, Document {}

const teamSchema: Schema = new Schema({
    name: {
        type: String,
        unique: true
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
});

const Team: Model<ITeamModel> = model<ITeamModel>("Team", teamSchema);

export { Team };