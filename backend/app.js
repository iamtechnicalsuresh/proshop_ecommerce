import express from "express";

// Initializing Express app
const app = express();

app.use("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "It's Working",
  });
});

export default app;
