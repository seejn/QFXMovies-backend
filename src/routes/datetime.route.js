import { Router } from "express";
import * as DateTimeController from "../controllers/DateTimeController.js";

export const router = Router();

router.get("/dates", DateTimeController.getAllDates);
router.get("/time", DateTimeController.getAllTime);