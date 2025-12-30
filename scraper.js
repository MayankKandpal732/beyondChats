const axios = require("axios");
const cheerio = require("cheerio");
const db = require("./db");

async function scrapeAndSaveArticles() {
  const url = "https://beyondchats.com/blogs/";
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  const articles = [];

  // Extract article cards
  $(".blog-card, article, .post").each((i, el) => {
    const title = $(el).find("h1, h2, h3").first().text().trim();
    const link = $(el).find("a").attr("href");

    if (title && link) {
      articles.push({
        title,
        link: link.startsWith("http")
          ? link
          : "https://beyondchats.com" + link
      });
    }
  });

  // Take ONLY last 5 (oldest)
  const oldestFive = articles.slice(-5);

  console.log("Saving oldest 5 articles to database...\n");

  for (let article of oldestFive) {
    // Visit article page
    const response = await axios.get(article.link);
    const $$ = cheerio.load(response.data);

    let content = "";

    $$("p").each((i, el) => {
      const text = $$(el).text().trim();
      if (text.length > 40) {
        content += text + "\n\n";
      }
    });

    // Insert into MySQL
    const sql =
      "INSERT INTO articles (title, content, source) VALUES (?, ?, ?)";

    db.query(
      sql,
      [article.title, content, "BeyondChats"],
      (err, result) => {
        if (err) {
          console.error("DB Error:", err.message);
        } else {
          console.log("Saved:", article.title);
        }
      }
    );
  }
}

scrapeAndSaveArticles();