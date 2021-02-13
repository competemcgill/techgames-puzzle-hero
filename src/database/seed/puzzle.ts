import { IPuzzle } from "../../interfaces/puzzle";

export const samplePuzzles: IPuzzle[] = [
    {
        title: "Puzzle 4",
        description: "this is another another another puzzle",
        answer: "4",
        next: [],
    },
    {
        title: "Puzzle 3",
        description: "this is another another puzzle",
        answer: "3",
        next: [],
    },
    {
        title: "Puzzle 2",
        description: "this is another puzzle",
        answer: "2",
        next: ["Puzzle 3", "Puzzle 4"],
    },
    {
        title: "Puzzle 1",
        description: "this is a puzzle",
        answer: "1",
        next: ["Puzzle 2"],
    },
]