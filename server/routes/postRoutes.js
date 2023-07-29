const express = require("express");
const router = express.Router();

// Import the postController
const postController = require("../controllers/postController");

// Route to create a new post
router.post("/createPost", postController.createPost);

// Route to get all posts from the database
router.get("/allposts", postController.getAllPosts);

// Route to get a particular post from the database
router.get("/allposts/:postId", postController.getPostById);

// Route to get all posts created by a specific user
router.get("/myposts", postController.getMyPosts);

// Route to get posts by categories
router.get("/posts", postController.getPostsByCategories);

// Route to like a post
router.put("/like", postController.likePost);

// Route to unlike a post
router.put("/unlike", postController.unlikePost);

// Route to add a comment to a post
router.put("/comment", postController.addCommentToPost);

// Route to delete a post
router.delete("/deletePost/:postId", postController.deletePost);

// Route to request a project work
router.put("/request", postController.requestProjectWork);

// // Route to unrequest a project work
// router.put("/unrequest", postController.unrequestProjectWork);

module.exports = router;
