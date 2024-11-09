import { Router } from "express";
import * as cinemaController from "../controllers/CinemaController.js"
import { AuthJWT } from '../middlewares/AuthMiddleware.js';
import { AuthorizedRoles } from '../middlewares/RoleAuthorization.js';

export const router = Router()

router.get("/cinemas", cinemaController.getAllCinemas);
router.get("/cinemas/:id", cinemaController.getCinemaById);
router.post("/cinemas", AuthJWT, AuthorizedRoles(["admin"]), cinemaController.addCinema);
router.patch("/cinemas/:id", AuthJWT, AuthorizedRoles(["admin"]), cinemaController.updateCinema);
router.delete("/cinemas/:id", AuthJWT, AuthorizedRoles(["admin"]), cinemaController.deleteCinema);
