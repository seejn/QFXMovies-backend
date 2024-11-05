import { Router } from "express";
import * as GenreController from "../controllers/GenreController.js";

export const router = Router();
router.get("/genres", GenreController.getAllGenres);
router.post("/genres", GenreController.createGenre);
router.patch("/genres/:id", GenreController.updateGenre);
router.delete("/genres/:id", GenreController.deleteGenre);