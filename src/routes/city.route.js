import express from "express";
import * as cityController from "../controllers/CityController.js"

export const router = express.Router();

router.get("/getAllCities", cityController.getAllCities);