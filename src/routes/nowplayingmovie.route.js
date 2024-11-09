import { Router } from "express";
import * as NowPlayingMovieController from "../controllers/NowPlayingMovieController.js";
import { AuthJWT } from '../middlewares/AuthMiddleware.js';
import { AuthorizedRoles } from '../middlewares/RoleAuthorization.js';

export const router = Router();

router.post("/now-playing-movies", AuthJWT, AuthorizedRoles(["admin", "theatre"]), NowPlayingMovieController.createMovie);
router.patch("/now-playing-movies/:id", AuthJWT, AuthorizedRoles(["admin", "theatre"]), NowPlayingMovieController.updateMovie);
router.delete("/now-playing-movies/:id", AuthJWT, AuthorizedRoles(["admin", "theatre"]), NowPlayingMovieController.deleteMovie);


router.get("/now-playing-movies", NowPlayingMovieController.getAllMovies);
router.get("/now-playing-movie/cinema/:cinema/movie/:movie", NowPlayingMovieController.getMoviePlayingInCinema);
router.get("/now-playing-movie/cinema/:cinema", NowPlayingMovieController.getMoviesPlayingInCinema);
// router.get("/now-playing-movie/movie/:movieId");