import express from "express";
import * as cinemaController from "../controllers/CinemaController.js"

export const router = express.Router()

router.get("/getAllCinemas", cinemaController.getAllCinemas);
router.get("/getCinemaById/:id", cinemaController.getCinemaById);
router.put("/updateCinema/:id", cinemaController.updateCinema);
router.delete("/deleteCinema/:id", cinemaController.deleteCinema);
router.post("/addCinema", cinemaController.addCinema);
