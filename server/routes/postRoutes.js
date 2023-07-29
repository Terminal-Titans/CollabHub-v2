const express = require("express");
const router = express.Router();

// Import the postController
const postController = require("../controllers/postController");

// Route to create a new post
router.post("/createPost", requireLogin, postController.createPost);

// Route to get all posts from the database
router.get("/allposts", postController.getAllPosts);

// Route to get a particular post from the database
router.get("/allposts/:postId", postController.getPostById);

// Route to get all posts created by a specific user
router.get("/myposts", requireLogin, postController.getMyPosts);

// Route to get posts by categories
router.get("/posts", postController.getPostsByCategories);

// Route to like a post
router.put("/like", requireLogin, postController.likePost);

// Route to unlike a post
router.put("/unlike", requireLogin, postController.unlikePost);

// Route to add a comment to a post
router.put("/comment", requireLogin, postController.addCommentToPost);

// Route to delete a post
router.delete("/deletePost/:postId", requireLogin, postController.deletePost);

// Route to request a project work
router.put("/request", requireLogin, postController.requestProjectWork);

// Route to unrequest a project work
router.put("/unrequest", requireLogin, postController.unrequestProjectWork);

module.exports = router;
