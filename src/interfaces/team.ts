import { IUser } from "./user";

export interface ITeam {
    name: string;
    users: string[];
    puzzles: [{
        puzzleId: string;
        completed: boolean;
    }];
}