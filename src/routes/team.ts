import { Router } from "express";
import { teamController } from "../controllers/team";
import { teamValidator } from "../util/validators/teamValidator";
import { middleware } from "../util/middleware";
const teamRouter: Router = Router();

/**
 * @swagger
 * /teams:
 *  get:
 *      description: Gets all Teams
 *      tags:
 *          - Teams
 *      produces:
 *          -application/json
 *      responses:
 *          200:
 *              description: Returns all Teams
 *          422:
 *              description: Validation error
 *          500:
 *              description: Internal server error
 */
teamRouter.get("/", teamValidator("GET /teams"), teamController.index);

/**
 * @swagger
 * /teams/{teamId}:
 *  get:
 *      description: Gets a specific Team
 *      tags:
 *          - Teams
 *      parameters:
 *          - in: path
 *            name: teamId
 *            description: ID of the team to get
 *            schema:
 *                  type: string
 *                  required: true
 *      produces:
 *          -application/json
 *      responses:
 *          200:
 *              description: Returns specific team
 *          404:
 *              description: Team with given ID not found
 *          422:
 *              description: Validation error
 *          500:
 *              description: Internal server error
 */
teamRouter.get("/:teamId", teamValidator("GET /teams/:teamId"), teamController.show);

/**
 * @swagger
 * /teams:
 *  post:
 *      description: Creates a new Team
 *      tags:
 *          - Teams
 *      parameters:
 *          - in: body
 *            name: teamData
 *            description: email or password of the new team
 *            schema:
 *                type: object
 *                properties:
 *                    name:
 *                        type: string
 *                example:
 *                    name: "McGill Martlets"
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Returns new team
 *          400:
 *              description: Team already exists
 *          422:
 *              description: Validation error
 *          500:
 *              description: Internal server error
 */
teamRouter.post("/", middleware.auth, teamValidator("POST /teams"), teamController.create);


teamRouter.post("/:teamId/addUser", middleware.auth, teamValidator("POST /teams/:teamId/addUser"), teamController.addUser);


/**
 * @swagger
 * /teams/{teamId}:
 *  delete:
 *      description: Deletes a specific Team
 *      tags:
 *          - Teams
 *      parameters:
 *           - in: path
 *             name: teamId
 *             schema:
 *                 type: string
 *                 required: true
 *             description: ID of the Team to delete
 *      produces:
 *          -application/json
 *      responses:
 *          200:
 *              description: Team was successfully deleted
 *          422:
 *              description: Validation error
 *          500:
 *              description: Internal server error
 */
teamRouter.delete("/:teamId", middleware.auth, teamValidator("DELETE /teams/:teamId"), teamController.delete);

export { teamRouter };