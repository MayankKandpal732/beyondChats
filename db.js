require("dotenv").config();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "beyondchats"
});

db.connect(err => {
  if (err) console.error(err);
  else console.log("MySQL connected");
});

module.exports = db;
