require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
console.log("SERVER>JS");
// Middleware
app.use(cors()); // Enables CORS to allow cross-origin requests
app.use(express.json()); // Parses JSON request bodies

// API Routes (Define before static middleware)
app.get("/api/message", (req, res) => {
  console.log("ASDJIODSJFOISDJF");
  res.json({ message: "Hello from the server! F YA" });
});

// Serve React build files
app.use(express.static(path.join(__dirname, "../client/build")));

// React Catch-All Route (MUST be last)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// Start server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
