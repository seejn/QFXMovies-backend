import { Router } from "express";
import * as NowPlayingMovieController from "../controllers/NowPlayingMovieController.js";

export const router = Router();

router.get("/now-playing-movies", NowPlayingMovieController.getAllMovies);
router.get("/now-playing-movies/:id", NowPlayingMovieController.getMovieById);
router.post("/now-playing-movies", NowPlayingMovieController.createMovie);
router.patch("/now-playing-movies/:id", NowPlayingMovieController.updateMovie);
router.delete("/now-playing-movies/:id", NowPlayingMovieController.deleteMovie);