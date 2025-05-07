// const express = require("express");
// const router = express.Router();
// const notesController = require("../controllers/notesController");

// router.post("/", notesController.createNote);
// router.get("/", notesController.getNotes);
// router.delete("/:id", notesController.deleteNote);
// router.get("/search", notesController.searchNotes);

// module.exports = router;

const express = require("express");
const router = express.Router();
const {
  createNote,
  getAllNotes,
  deleteNote,
  searchNotes,
} = require("../controllers/notesController");

router.post("/", createNote);
router.get("/", getAllNotes);
router.get("/search", searchNotes);
router.delete("/:id", deleteNote);

module.exports = router;
