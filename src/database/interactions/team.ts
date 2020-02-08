import { ITeam } from "../../interfaces/team";
import { Team, ITeamModel } from "../models/team";

export const teamDBInteractions = {
    create: (team: ITeam): Promise<ITeamModel> => {
        return Team.create(team);
    },
    all: (): Promise<ITeamModel[]> => {
        return Team.find({}).exec();
    },
    find: (teamId: string): Promise<ITeamModel> => {
        return Team.findOne({_id: teamId}).exec();
    },
    findByName: (name: string,): Promise<ITeamModel> => {
        return Team.findOne({name: name}).exec();
    },
    update: (teamId: string, newTeam: ITeam): Promise<ITeamModel> => {
        return Team.findByIdAndUpdate(teamId, newTeam, {new: true}).exec();
    },
    delete: (teamId: string): Promise<ITeamModel> => {
        return Team.findByIdAndDelete(teamId).exec();
    },
};