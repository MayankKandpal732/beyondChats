const db = require("../db");

exports.getArticles = (req, res) => {
  db.query("SELECT * FROM articles", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.createArticle = (req, res) => {
  const { title, content, source } = req.body;
  const sql = "INSERT INTO articles (title, content, source) VALUES (?, ?, ?)";
  db.query(sql, [title, content, source], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Article created", id: result.insertId });
  });
};

exports.updateArticle = (req, res) => {
  const { title, content, source } = req.body;
  const { id } = req.params;
  const sql =
    "UPDATE articles SET title=?, content=?, source=? WHERE id=?";
  db.query(sql, [title, content, source, id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Article updated" });
  });
};

exports.deleteArticle = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM articles WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Article deleted" });
  });
};