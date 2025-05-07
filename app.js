const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const noteRoutes = require("./routes/noteRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// --- API call count logic ---
let apiCallCount = 0;
app.use((req, res, next) => {
  apiCallCount++;
  next();
});

app.get("/api/metrics", (req, res) => {
  res.json({ httpRequests: apiCallCount });
});
app.use("/api/notes", noteRoutes);

module.exports = app;
