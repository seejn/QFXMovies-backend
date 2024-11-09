import { Router } from "express";
import * as cityController from "../controllers/CityController.js"
import { AuthJWT } from '../middlewares/AuthMiddleware.js';
import { AuthorizedRoles } from '../middlewares/RoleAuthorization.js';

export const router = Router();

router.get("/cities", cityController.getAllCities);
router.get("/cities/:id", cityController.getCity);
router.post("/cities", AuthJWT, AuthorizedRoles(["admin"]), cityController.createCity);
router.delete("/cities/:id", AuthJWT, AuthorizedRoles(["admin"]), cityController.removeCity);
router.patch("/cities/:id", AuthJWT, AuthorizedRoles(["admin"]), cityController.updateCity);