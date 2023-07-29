const express = require("express");
const router = express.Router();

// Import the userController
const userController = require("../controllers/userController");

// Route to get user profile
router.get("/user/:id", userController.getUserProfile);

// Route to follow user
router.put("/follow", requireLogin, userController.followUser);

// Route to unfollow user
router.put("/unfollow", requireLogin, userController.unfollowUser);

// Route to upload profile pic
router.put("/uploadProfilePic", requireLogin, userController.uploadProfilePic);

// Route to update user information
router.put("/users/update", requireLogin, userController.updateUser);

module.exports = router;
