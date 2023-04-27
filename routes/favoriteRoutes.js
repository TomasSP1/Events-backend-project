const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  setFavorite,
  getFavorites,
  deleteFavorite,
} = require("../controllers/favoriteController");

router.route("/").post(protect, setFavorite).get(protect, getFavorites);
router.route("/:id").delete(protect, deleteFavorite);

module.exports = router;
