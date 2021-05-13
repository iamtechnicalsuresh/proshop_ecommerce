import express from "express";
import {
  getProducts,
  getProduct,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopRatedProducts,
} from "../controllers/productController.js";
import { protect, restricTo } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/:id/reviews").post(protect, createProductReview);
router.route("/").get(getProducts).post(protect, restricTo, createProduct);
router.route("/top").get(getTopRatedProducts);

router
  .route("/:id")
  .get(getProduct)
  .delete(protect, restricTo, deleteProduct)
  .put(protect, restricTo, updateProduct);

export default router;
