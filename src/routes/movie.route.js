import { Router } from "express";
import * as movieController from "../controllers/MovieController.js";

export const router = Router();

router.get("/movies", movieController.getAllMovies);
router.get("/movies/:id", movieController.getMovieById);
router.post("/movies", movieController.addMovie);
router.patch("/movies/:id", movieController.updateMovie);
router.delete("/movies/:id", movieController.deleteMovie);