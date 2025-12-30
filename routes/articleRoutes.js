const express = require("express");
const controller = require("../controllers/articleController");

const router = express.Router();

router.get("/", controller.getArticles);
router.post("/", controller.createArticle);
router.put("/:id", controller.updateArticle);
router.delete("/:id", controller.deleteArticle);

module.exports = router;