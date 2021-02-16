import { body, param, ValidationChain } from "express-validator/check";

export function teamValidator(method: string): ValidationChain[] {
    switch (method) {
        case "GET /teams": {
            return [];
        }
        case "GET /teams/:teamId": {
            return [
                param("teamId", "Invalid or missing ':teamId'").exists().isMongoId()
            ];
        }
        case "POST /teams": {
            return [
                body("name", "Invalid or missing 'name'").exists().isString(),
            ];
        }
        case "POST /teams/:teamId/addUser": {
            return [
                param("teamId", "Invalid or missing ':teamId'").exists().isMongoId(),
                body("email", "Invalid or missing 'email'").exists().isString(),
            ];
        }
        case "POST /teams/:teamName/addToOtherScore": {
            return [
                param("teamName", "Invalid or missing ':teamName'").exists(),
                body("scoreToAdd", "Invalid or missing ':scoreToAdd").exists().isNumeric()
            ]
        }
        case "POST /teams/:teamName/setOtherScore": {
            return [
                param("teamName", "Invalid or missing ':teamName'").exists(),
                body("scoreToSet", "Invalid or missing ':scoreToSet").exists().isNumeric()
            ]
        }
        case "PUT /teams/:teamId": {
            return [
                param("teamId", "Invalid or missing ':teamId'").exists().isMongoId(),
                body("name", "Invalid 'name'").optional().isString(),
                body("users", "Invalid 'users'").optional().isArray(),
            ];
        }
        case "DELETE /teams/:teamId": {
            return [
                param("teamId", "Invalid or missing ':teamId'").exists().isMongoId()
            ];
        }
    }
}