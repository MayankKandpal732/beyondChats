const express = require("express");
const cors = require("cors");
const articleRoutes = require("./routes/articleRoutes");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// TEMPORARY seed route (will remove later)
app.get("/seed", (req, res) => {
  const sql =
    "INSERT INTO articles (title, content, source) VALUES (?, ?, ?)";

  db.query(
    sql,
    [
      "Railway Seed Article",
      "This article was inserted into the Railway MySQL database to verify deployment.",
      "Railway",
    ],
    (err) => {
      if (err) {
        console.error("Seed error:", err);
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: "Seed data inserted successfully" });
    }
  );
});

// Article routes
app.use("/articles", articleRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});