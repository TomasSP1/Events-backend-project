const mongoose = require("mongoose");

const Event = mongoose.model(
  "Event",
  new mongoose.Schema(
    {
      title: {
        type: String,
        trim: true.valueOf,
        required: [true, "Please add a title"],
      },
      description: {
        type: String,
        trim: true.valueOf,
        required: [true, "Please add a description"],
      },
      category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: [true, "Please add a category"],
      },
      date: {
        type: Date,
        required: [true, "Please add a date"],
      },
      place: {
        type: String,
        required: [true, "Please add a place"],
      },
      image: {
        type: String,
        required: [true, "Please add a image"],
      },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = Event;
