const mongoose = require("mongoose");
const POST = require("../models/post");
const USER = require("../models/user");

// Controller to create a new post
const createPost = (req, res) => {
  const {
    title,
    body,
    categories,
    techStacks,
    startDate,
    endDate,
    collaborators,
  } = req.body;

  const post = new POST({
    title,
    body,
    postedBy: req.user, // User creating the post
    categories,
    techStacks,
    startDate,
    endDate,
    collaborators,
  });

  post.save((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    }

    USER.findByIdAndUpdate(
      req.user._id,
      { $push: { posts: result._id } },
      { new: true },
      (err, user) => {
        if (err) {
          return res.status(422).json({ error: err });
        }
        res.json({ post: result });
      }
    );
  });
};

// Controller to get all posts from the database
const getAllPosts = (req, res) => {
  POST.find()
    .populate("postedBy", "_id name Photo")
    .populate("comments.postedBy", "_id name")
    .sort("-createdAt")
    .then((posts) => res.json(posts))
    .catch((err) => console.log(err));
};

// Controller to get a particular post from the database
const getPostById = (req, res) => {
  const { postId } = req.params;
  POST.findById(postId)
    .populate("request", "_id name")
    .populate("comments.postedBy", "_id name")
    .then((post) => res.json(post))
    .catch((err) => console.log(err));
};

// Controller to get all posts created by a specific user
const getMyPosts = (req, res) => {
  const userId = req.user._id;
  USER.findById(userId)
    .then((user) => {
      const postIds = user.posts.map((postId) => postId.toString());
      POST.find({ _id: { $in: postIds } })
        .populate("postedBy", "_id name photo")
        .populate("comments.postedBy", "_id name")
        .sort("-createdAt")
        .then((posts) => res.json(posts))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

// Controller to get posts by categories
const getPostsByCategories = (req, res) => {
  const categories = req.query.categories.split(",");
  POST.find({ "categories.name": { $all: categories } })
    .populate("postedBy", "_id name photo")
    .populate("comments.postedBy", "_id name")
    .sort("-createdAt")
    .then((posts) => res.json(posts))
    .catch((err) => console.log(err));
};

// Controller to like a post
const likePost = (req, res) => {
  POST.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { likes: req.user._id },
    },
    {
      new: true,
    }
  )
    .populate("postedBy", "_id name Photo")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
};

// Controller to unlike a post
const unlikePost = (req, res) => {
  POST.findByIdAndUpdate(
    req.body.postId,
    {
      $pull: { likes: req.user._id },
    },
    {
      new: true,
    }
  )
    .populate("postedBy", "_id name Photo")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
};

// Controller to add a comment to a post
const addCommentToPost = (req, res) => {
  const comment = {
    comment: req.body.text,
    postedBy: req.user._id,
  };
  POST.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { comments: comment },
    },
    {
      new: true,
    }
  )
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name Photo")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
};

// Controller to delete a post
const deletePost = (req, res) => {
  POST.findOne({ _id: req.params.postId })
    .populate("postedBy", "_id")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(422).json({ error: err });
      }

      if (post.postedBy._id.toString() == req.user._id.toString()) {
        post
          .remove()
          .then((result) => {
            return res.json({ message: "Successfully deleted" });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
};

// Controller to request a project work
const requestProjectWork = (req, res) => {
  POST.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { request: req.user._id },
    },
    {
      new: true,
    }
  )
    .populate("postedBy", "_id name Photo")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
};

// Controller to unrequest a project work
const unrequestProjectWork = (req, res) => {
  POST.findByIdAndUpdate(
    req.body.postId,
    {
      $pull: { request: req.user._id },
    },
    {
      new: true,
    }
  )
    .populate("postedBy", "_id name Photo")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  getMyPosts,
  getPostsByCategories,
  likePost,
  unlikePost,
  addCommentToPost,
  deletePost,
  requestProjectWork,
  unrequestProjectWork,
};
