const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "database.sqlite");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("SQLite connection failed:", err.message);
  } else {
    console.log("SQLite connected");

    db.run(`
      CREATE TABLE IF NOT EXISTS articles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        content TEXT,
        source TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
});

module.exports = db;
