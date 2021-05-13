import express from "express";
import path from "path";
import morgan from "morgan";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoute from "./routes/uploadRoutes.js";
import { urlNotFound, errorHandler } from "./middlewares/errorMiddleware.js";

// Initializing Express app
const app = express();

// Middlewares
app.use(morgan("dev"));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoute);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.get("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "It's Working",
  });
});

// Error Handlers
app.use(urlNotFound);

app.use(errorHandler);

export default app;
