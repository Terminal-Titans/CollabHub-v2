const mongoose = require("mongoose");
const USER = require("../models/user");

// Controller to get user profile
const getUserProfile = (req, res) => {
  USER.findById(req.params.id)
    .select("-password") // Excludes password field from response
    .populate("posts") // Populates the user's posts with their IDs and titles
    .exec((err, user) => {
      if (err || !user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json({ user });
    });
};

// Controller to follow user
const followUser = (req, res) => {
  USER.findByIdAndUpdate(
    req.body.followId,
    {
      $push: { followers: req.user._id },
    },
    {
      new: true,
    },
    (err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      }
      USER.findByIdAndUpdate(
        req.user._id,
        {
          $push: { following: req.body.followId },
        },
        {
          new: true,
        }
      )
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          return res.status(422).json({ error: err });
        });
    }
  );
};

// Controller to unfollow user
const unfollowUser = (req, res) => {
  USER.findByIdAndUpdate(
    req.body.followId,
    {
      $pull: { followers: req.user._id },
    },
    {
      new: true,
    },
    (err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      }
      USER.findByIdAndUpdate(
        req.user._id,
        {
          $pull: { following: req.body.followId },
        },
        {
          new: true,
        }
      )
        .then((result) => res.json(result))
        .catch((err) => {
          return res.status(422).json({ error: err });
        });
    }
  );
};

// Controller to upload profile pic
const uploadProfilePic = (req, res) => {
  USER.findByIdAndUpdate(
    req.user._id,
    {
      $set: { Photo: req.body.pic },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: er });
    } else {
      res.json(result);
    }
  });
};

// Controller to update user information
const updateUser = async (req, res) => {
  try {
    const userId = req.user._id; // Get the user ID from the request parameters
    const updateData = req.body; // Get the updated data from the request body

    const user = await USER.findById(userId); // Find the user to update by ID

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update the user object with the new data
    user.name = updateData.name || user.name;
    user.college = updateData.college || user.college;
    user.userName = updateData.userName || user.userName;
    user.email = updateData.email || user.email;
    user.about = updateData.about || user.about;
    user.Photo = updateData.Photo || user.Photo;
    user.Portfolio = updateData.Portfolio || user.Portfolio;
    user.LinkedIn = updateData.LinkedIn || user.LinkedIn;
    user.Github = updateData.Github || user.Github;
    user.GFG = updateData.GFG || user.GFG;
    user.LeetCode = updateData.LeetCode || user.LeetCode;

    // Save the updated user to the database
    await user.save();

    res.json({ success: true, user });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: "Error updating user" });
  }
};

module.exports = {
  getUserProfile,
  followUser,
  unfollowUser,
  uploadProfilePic,
  updateUser,
};
