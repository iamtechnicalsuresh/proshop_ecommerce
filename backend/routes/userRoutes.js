import express from "express";
import {
  authUser,
  register,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
} from "../controllers/userController.js";
import { protect, restricTo } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/login", authUser);
router.post("/register", register);

router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.route("/").get(protect, restricTo, getUsers);
router
  .route("/:id")
  .delete(protect, restricTo, deleteUser)
  .get(protect, restricTo, getUserByID)
  .put(protect, restricTo, updateUser);

export default router;
