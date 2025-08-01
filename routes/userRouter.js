import { Router } from "express";
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from "../controllers/userControllers.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import { authorizedPermissions } from "../middleware/authMiddleware.js";
const router = Router();

router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats", [
  authorizedPermissions("admin"),
  getApplicationStats,
]);
router.patch("/update-user", validateUpdateUserInput, updateUser);

export default router;
