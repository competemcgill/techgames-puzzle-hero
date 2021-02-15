export type PuzzleCategory = 'Memes' | 'McGill' | 'Video Games' | 'CS History' | 'Algo Runtimes' | 'Pop Culture' | 'Competitive Programming' | 'Uncategorized'

export interface IPuzzle {
    title: string;
    description: string;
    answer: string;
    next: string[];
    category: PuzzleCategory;
}