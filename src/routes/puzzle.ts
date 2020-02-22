import { Router } from "express";
import { puzzleController } from "../controllers/puzzle";
import { puzzleValidator } from "../util/validators/puzzleValidator";

const puzzleRouter: Router = Router();

/**
 * @swagger
 * /puzzles:
 *  get:
 *      description: Gets all Puzzles
 *      tags:
 *          - Puzzles
 *      produces:
 *          -application/json
 *      responses:
 *          200:
 *              description: Returns all Puzzles
 *          422:
 *              description: Validation error
 *          500:
 *              description: Internal server error
 */
puzzleRouter.get("/", puzzleValidator("GET /puzzles"), puzzleController.index);

/**
 * @swagger
 * /puzzles/{puzzleId}:
 *  get:
 *      description: Gets a specific Puzzle
 *      tags:
 *          - Puzzles
 *      parameters:
 *          - in: path
 *            name: puzzleId
 *            description: ID of the puzzle to get
 *            schema:
 *                  type: string
 *                  required: true
 *      produces:
 *          -application/json
 *      responses:
 *          200:
 *              description: Returns specific puzzle
 *          404:
 *              description: Puzzle with given ID not found
 *          422:
 *              description: Validation error
 *          500:
 *              description: Internal server error
 */
puzzleRouter.get("/:puzzleId", puzzleValidator("GET /puzzles/:puzzleId"), puzzleController.show);

/**
 * @swagger
 * /puzzlesByTitle/{puzzleTitle}:
 *  get:
 *      description: Gets a specific Puzzle by Title
 *      tags:
 *          - Puzzles
 *      parameters:
 *          - in: path
 *            name: puzzleTitle
 *            description: title of the puzzle to get
 *            schema:
 *                  type: string
 *                  required: true
 *      produces:
 *          -application/json
 *      responses:
 *          200:
 *              description: Returns specific puzzle
 *          404:
 *              description: Puzzle with given ID not found
 *          422:
 *              description: Validation error
 *          500:
 *              description: Internal server error
 */
puzzleRouter.get("/puzzlesByTitle/:puzzleTitle", puzzleValidator("GET /puzzlesByTitle/:puzzleTitle"), puzzleController.showByTitle);



/**
 * @swagger
 * /puzzles/{puzzleId}/checkAnswer:
 *  post:
 *      description: Checks the answer for a specific Puzzle
 *      tags:
 *          - Puzzles
 *      parameters:
 *          - in: path
 *            name: puzzleId
 *            description: ID of the puzzle to get
 *            schema:
 *                  type: string
 *                  required: true
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          teamId: 
 *                              type: string
 *                          answer:
 *                              type: string
 *      produces:
 *          -application/json
 *      responses:
 *          200:
 *              description: Returns specific puzzle
 *          404:
 *              description: Puzzle with given ID not found
 *          422:
 *              description: Validation error
 *          500:
 *              description: Internal server error
 */
puzzleRouter.post("/:puzzleId/checkAnswer", puzzleValidator("POST /puzzles/:puzzleId/checkAnswer"), puzzleController.checkAnswer);



export { puzzleRouter };