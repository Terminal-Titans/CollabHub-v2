const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      // required: true,
    },
    body: {
      type: String,
      // required: true,
    },
    photo: {
      type: String,
      // required: true
    },
    comments: [
      {
        comment: { type: String },
        postedBy: { type: ObjectId, ref: "user" },
      },
    ],
    postedBy: {
      type: ObjectId,
      ref: "user",
    },
    categories: [
      {
        name: {
          type: String,
          // required: true,
        },
      },
    ],
    techStacks: {
      type: String,
      // required: true,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    collaborators: {
      type: Number,
      // required: true,
      default: 0,
    },
    likes: [
      {
        type: ObjectId,
        ref: "user",
      },
    ],
    request: [
      {
        type: ObjectId,
        ref: "user",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", postSchema);
