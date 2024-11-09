import { Router } from "express";
import * as RoleController from "../controllers/RoleController.js";
import { AuthJWT } from '../middlewares/AuthMiddleware.js';
import { AuthorizedRoles } from '../middlewares/RoleAuthorization.js';

export const router = Router();

router.get("/roles",  RoleController.getAllRoles);
router.post("/roles", AuthJWT, AuthorizedRoles(["admin"]), RoleController.createRole);
router.patch("/roles/:name", AuthJWT, AuthorizedRoles(["admin"]), RoleController.updateRole);
router.delete("/roles/:name", AuthJWT, AuthorizedRoles(["admin"]), RoleController.deleteRole);