const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "user",
      // required: true,
    },
    post: {
      type: ObjectId,
      ref: "post",
      // required: true,
    },
    text: {
      type: String,
      // required: true,
    },
    replies: [
      {
        user: {
          type: ObjectId,
          ref: "user",
          // required: true,
        },
        text: {
          type: String,
          // required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("comment", commentSchema);
