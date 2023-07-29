const express = require("express");
const router = express.Router();

// Import the authController
const authController = require("../controllers/authController");

// Route for user signup
router.post("/signup", authController.signup);

// Route for user signin
router.post("/signin", authController.signin);

// Export the router
module.exports = router;
