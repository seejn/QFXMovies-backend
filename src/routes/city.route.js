import { Router } from "express";
import * as cityController from "../controllers/CityController.js"

export const router = Router();

router.get("/cities", cityController.getAllCities);
router.get("/cities/:id", cityController.getCity);
router.post("/cities", cityController.createCity);
router.delete("/cities/:id", cityController.removeCity);
router.patch("/cities/:id", cityController.updateCity);