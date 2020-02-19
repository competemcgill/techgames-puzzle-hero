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