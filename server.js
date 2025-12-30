app.get("/seed", (req, res) => {
  const sql = `
    INSERT INTO articles (title, content, source)
    VALUES (
      'Railway Seed Article',
      'This article was inserted into the Railway MySQL database to verify deployment.',
      'Railway'
    )
  `;

  const db = require("./db");

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Seed data inserted" });
  });
});


const express = require("express");
const cors = require("cors");
const articleRoutes = require("./routes/articleRoutes");

const app = express(); 

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/articles", articleRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});