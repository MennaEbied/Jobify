import { Router } from "express";
const router = Router();

import { login, register } from "../controllers/authControllers.js";
import { validateRegisterInut } from "../middleware/validationMiddleware.js";


router.post("/register",validateRegisterInut, register);
router.post("/login", login);


export default router