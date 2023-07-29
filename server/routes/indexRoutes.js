const express = require("express");
const router = express.Router();

// Importing the route handlers from different files
const authRoutes = require("./authRoutes");
const postRoutes = require("./postRoutes");
const userRoutes = require("./userRoutes");

// Middleware function for logging incoming requests
router.use((req, res, next) => {
  console.log(`Received a request at ${req.originalUrl}`);
  next();
});

// Mounting the route handlers for specific paths
router.use("/auth", authRoutes);
router.use("/post", postRoutes);
router.use("/user", userRoutes);

module.exports = router;
