const express = require("express");
const router = express.Router();

const {
  setCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

// tikrinama ar public ar private access, kokias funkcijas agles daryti tam tikras useris (pgl admin arba simple role)
// const { protect } = require("../middleware/authMiddleware");
// router
//   .route("/")
//   .get(protect, getCategories)
//   .post(protect, setCategory);
// router
//   .route("/:id")
//   .put(protect, updateCategory)
//   .delete(protect, deleteCategory)

router
  .route("/")
  .get(getCategories)
  .post(setCategory);
router
  .route("/:id")
  .put(updateCategory)
  .delete(deleteCategory)


module.exports = router;