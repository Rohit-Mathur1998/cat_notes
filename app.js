// const express = require("express");
// const mongoose = require("mongoose");
// const notesRoutes = require("./routes/noteRoutes");
// const morgan = require("morgan");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(morgan("dev"));
// app.use("/api/notes", notesRoutes);

// mongoose
//   .connect(process.env.MONGO_URI || "mongodb://localhost:27017/catnotes", {})
//   .then(() => {
//     console.log("MongoDB connected");
//     app.listen(5000, () => console.log("Server started on port 5000"));
//   })
//   .catch((err) => console.error(err));

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const noteRoutes = require("./routes/noteRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/notes", noteRoutes);

module.exports = app;
