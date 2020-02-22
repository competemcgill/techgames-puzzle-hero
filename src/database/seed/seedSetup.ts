import { samplePuzzles } from "./puzzle";
import { Puzzle, IPuzzleModel } from "../models/puzzle";
import { puzzleDBInteractions } from "../interactions/puzzle";

export const seed = async () => {
    for (const sample of samplePuzzles) {
        const puzzleSeed: IPuzzleModel = new Puzzle(sample);
        for (const title of sample.next) {
            let result = await puzzleDBInteractions.findByTitle(title);
            if (result.title != title) {
                console.log(`Next element not found: ${title}`)
                throw new Error("Element not found")
            }
        }
        let puzzle = await puzzleDBInteractions.create(puzzleSeed);
    }
};