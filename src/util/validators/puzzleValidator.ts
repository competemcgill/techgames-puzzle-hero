import { body, param, ValidationChain } from "express-validator/check";

export function puzzleValidator(method: string): ValidationChain[] {
    switch (method) {
        case "GET /puzzles": {
            return [];
        }
        case "GET /puzzles/:puzzleId": {
            return [
                param("puzzleId", "Invalid or missing ':puzzleId'").exists().isMongoId()
            ];
        }
        case "GET /puzzlesByTitle/:puzzleTitle": {
            return [
                param("puzzleTitle", "Invalid or missing ':puzzleTitle'").exists().isString()
            ];
        }
        case "POST /puzzles/:puzzleId/checkAnswer": {
            return [
                param("puzzleId", "Invalid or missing ':puzzleId'").exists().isMongoId(),
                body("teamId", "Invalid 'teamId'").exists().isMongoId(),
                body("answer", "Invalid 'answer'").exists().isString(),
            ];
        }

    }
}