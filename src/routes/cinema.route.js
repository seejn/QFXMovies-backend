import { Router } from "express";
import * as cinemaController from "../controllers/CinemaController.js"

export const router = Router()

router.get("/cinemas", cinemaController.getAllCinemas);
router.get("/cinemas/:id", cinemaController.getCinemaById);
router.post("/cinemas", cinemaController.addCinema);
router.patch("/cinemas/:id", cinemaController.updateCinema);
router.delete("/cinemas/:id", cinemaController.deleteCinema);
