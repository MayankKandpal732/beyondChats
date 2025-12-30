const db = require("../db");

exports.getArticles = (req, res) => {
  db.all("SELECT * FROM articles", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
};

exports.createArticle = (req, res) => {
  const { title, content, source } = req.body;

  const sql =
    "INSERT INTO articles (title, content, source) VALUES (?, ?, ?)";

  db.run(sql, [title, content, source], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Article created", id: this.lastID });
  });
};

exports.updateArticle = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const sql =
    "UPDATE articles SET title = ?, content = ? WHERE id = ?";

  db.run(sql, [title, content, id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Article updated" });
  });
};

exports.deleteArticle = (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM articles WHERE id = ?", [id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Article deleted" });
  });
};