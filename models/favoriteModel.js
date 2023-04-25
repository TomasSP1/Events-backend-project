const mongoose = require("mongoose");

const Favorite = mongoose.model(
  "Favorite",
  new mongoose.Schema(
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: true,
      },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = Favorite;
