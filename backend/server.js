import app from "./app.js";
import connectDB from "./configs/db.js";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";

// Middlewares
dotenv.config();
app.use(morgan("dev"));

// Database Connection
connectDB();

const port = process.env.PORT || 8000;

app.listen(port, () =>
  console.log(`Listening on http://localhost:${port}`.blue.underline.bold)
);
