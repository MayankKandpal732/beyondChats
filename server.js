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