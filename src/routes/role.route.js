import { Router } from "express";
import * as RoleController from "../controllers/RoleController.js";

export const router = Router();

router.get("/roles", RoleController.getAllRoles);
router.post("/roles", RoleController.createRole);
router.patch("/roles/:name", RoleController.updateRole);
router.delete("/roles/:name", RoleController.deleteRole);