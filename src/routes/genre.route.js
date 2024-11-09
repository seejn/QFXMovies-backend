import { Router } from "express";
import * as GenreController from "../controllers/GenreController.js";
import { AuthJWT } from '../middlewares/AuthMiddleware.js';
import { AuthorizedRoles } from '../middlewares/RoleAuthorization.js';

export const router = Router();
router.get("/genres", GenreController.getAllGenres);
router.post("/genres", AuthJWT, AuthorizedRoles(["admin", "theatre"]), GenreController.createGenre);
router.patch("/genres/:id", AuthJWT, AuthorizedRoles(["admin", "theatre"]), GenreController.updateGenre);
router.delete("/genres/:id", AuthJWT, AuthorizedRoles(["admin", "theatre"]), GenreController.deleteGenre);