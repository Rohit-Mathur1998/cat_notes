const Note = require("../models/Note");
const fetchCatFact = require("../utils/fetchCatFact");

// Create a new note with a cat fact
exports.createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Both title and content are required." });
    }
    const catfact = await fetchCatFact();

    const note = await Note.create({ title, content, catfact });
    res.status(201).json(note);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create note", error: error.message });
  }
};

// Get all notes
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch notes", error: error.message });
  }
};

// Delete a note
exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete note", error: error.message });
  }
};

// Search notes
exports.searchNotes = async (req, res) => {
  try {
    const { q } = req.query;
    const regex = new RegExp(q, "i");

    const notes = await Note.find({
      $or: [{ title: regex }, { content: regex }, { catfact: regex }],
    });

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Search failed", error: error.message });
  }
};
