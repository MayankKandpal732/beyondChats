const express = require("express");
const cors = require("cors");
const articleRoutes = require("./routes/articleRoutes");

const app = express(); // ✅ app is defined HERE

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// articles routes
app.use("/articles", articleRoutes);

app.listen(5000, () => {
  console.log("🚀 Server started on port 5000");
});