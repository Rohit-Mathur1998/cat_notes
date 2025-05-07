const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    catfact: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", noteSchema);
