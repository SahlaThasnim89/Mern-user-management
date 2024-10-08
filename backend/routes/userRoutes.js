import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from '../middleware/multer.js';

router.post("/register", registerUser);
router.post("/login", authUser);
router.post("/logout", logoutUser);
router
  .route("/account")
  .get(protect, getUserProfile)
  .put(protect,upload.single('image'), updateUserProfile);

export default router;
