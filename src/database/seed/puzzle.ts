import { IPuzzle } from "../../interfaces/puzzle";

export const samplePuzzles: IPuzzle[] = [
    {
        title: "3",
        description: "this is another another another puzzle",
        answer: "3",
        category: "Uncategorized",
        next: [],
    },
    {
        title: "2",
        description: "this is another another puzzle",
        answer: "2",
        category: "Uncategorized",
        next: [],
    },
    {
        title: "1",
        description: "this is another puzzle",
        answer: "1",
        category: "Uncategorized",
        next: ["2", "3"],
    },
    {
        title: "0",
        description: "this is a puzzle",
        answer: "0",
        category: "Uncategorized",
        next: ["1"],
    },
]