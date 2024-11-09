import { Router } from "express";
import * as movieController from "../controllers/MovieController.js";
import { AuthJWT } from "../middlewares/AuthMiddleware.js";
import { AuthorizedRoles } from "../middlewares/RoleAuthorization.js";

export const router = Router();

router.get("/movies", movieController.getAllMovies);
router.get("/movies/:id", movieController.getMovieById);
router.post("/movies", AuthJWT, AuthorizedRoles(["theatre"]), movieController.addMovie);
router.patch("/movies/:id", AuthJWT, AuthorizedRoles(["theatre"]), movieController.updateMovie);
router.delete("/movies/:id", AuthJWT, AuthorizedRoles(["theatre"]), movieController.deleteMovie);