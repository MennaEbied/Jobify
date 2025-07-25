import { Router } from "express";
const router = Router();

import { login, logout, register } from "../controllers/authControllers.js";
import {
  validateRegisterInut,
  validateLoginInput,
} from "../middleware/validationMiddleware.js";

router.post("/register", validateRegisterInut, register);
router.post("/login", validateLoginInput, login);
router.get("/logout", logout);

export default router;
