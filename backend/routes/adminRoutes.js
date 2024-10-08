import express from "express";
const router = express.Router();
import {
  authAdmin,
  logoutAdmin,
  getUsers,
  updateUserProfile,
  registerUser,
  getSingleUser,
  blockUser
} from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from '../middleware/multer.js';

router.post("/login", authAdmin);
router.post("/logout", logoutAdmin);
router.post('/createUser',registerUser)
router.get('/usersList',protect,getUsers)
  .route("/editUser/:id")
  .get(protect, getSingleUser)
  .put(protect,upload.single('image'), updateUserProfile);
router.patch('/deleteUser/:id',protect,blockUser)
export default router;
