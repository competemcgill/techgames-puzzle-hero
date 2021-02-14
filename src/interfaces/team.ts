import { IUser } from "./user";

export type Completed = "COMPLETED" | "UNLOCKED" | "LOCKED"

export interface ITeamPuzzle {
    puzzleId: string;
    title: string;
    completed: Completed;
}

export interface ITeam {
    name: string;
    users: string[];
    puzzles: ITeamPuzzle[];
    score: number;
}