const asyncHandler = require("express-async-handler");
const Favorite = require("../models/favoriteModel");

// @desc Set favorites
// @route POST /api/favorites
// @access PRIVATE

const setFavorite = asyncHandler(async (req, res) => {
  const { eventId } = req.body;

  if (!req.user) {
    res.status(400);
    throw new Error("User is not logged in!");
  }

  const userId = req.user.id;

  const favorite = await Favorite.create({ userId, eventId });

  if (favorite) {
    res.status(200).json(favorite);
  } else {
    throw new Error("Error, favorite failed to be added!");
  }
});

// @desc GET favorites
// @route GET /api/favorites
// @access PRIVATE

const getFavorites = asyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(400);
    throw new Error("User is not logged in!");
  }

  const userId = req.user.id;

  const favorites = await Favorite.find({ userId });

  if (favorites) {
    res.status(200).json(favorites);
  } else {
    throw new Error("Failed to get favorites");
  }
});

// @desc DELETE favorites
// @route DELETE /api/favorites/:id
// @access PRIVATE

const deleteFavorite = asyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(400);
    throw new Error("User is not logged in!");
  }

  const { id } = req.params;
  const userId = req.user.id;

  const result = await Favorite.deleteOne({ _id: id, userId });

  if (result.deletedCount === 1) {
    res.status(200).json({ message: "Favorite deleted" });
  } else {
    throw new Error("Error while trying to delete favorites");
  }
});

module.exports = { setFavorite, getFavorites, deleteFavorite };
