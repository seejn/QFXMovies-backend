import express from "express";
import * as movieController from "../controllers/MovieController.js";

export const router = express.Router();

router.get("/getAllMovies", movieController.getAllMovies);
router.get("/getMovieById/:id", movieController.getMovieById);
router.post("/addMovie", movieController.addMovie);
router.put("/updateMovie/:id", movieController.updateMovie);
router.delete("/deleteMovie/:id", movieController.deleteMovie);