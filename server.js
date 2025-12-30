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

app.listen(5000, () => {
  console.log("Server started : port 5000");
});