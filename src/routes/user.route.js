import { Router } from "express";
import * as UserController from "../controllers/UserController.js";
import { AuthJWT, RefreshJWT } from "../middlewares/AuthMiddleware.js";

export const router = Router();

router.get("/users", UserController.getAllUsers);
router.get("/users/:id", UserController.getUserById);
router.patch("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/logout", AuthJWT, UserController.logout);
router.post("/refresh", RefreshJWT, UserController.generateNewAccessToken);