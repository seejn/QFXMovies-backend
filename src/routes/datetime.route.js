import { Router } from "express";
import * as DateTimeController from "../controllers/DateTimeController.js";
import { AuthJWT } from '../middlewares/AuthMiddleware.js';
import { AuthorizedRoles } from '../middlewares/RoleAuthorization.js';

export const router = Router();

router.get("/dates", DateTimeController.getAllDates);
router.get("/time", DateTimeController.getAllTime);