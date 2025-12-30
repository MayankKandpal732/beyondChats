const axios = require("axios");
const cheerio = require("cheerio");
const db = require("./db");

const BASE_URL = "https://beyondchats.com";
const BLOG_URL = "https://beyondchats.com/blogs/";

async function scrapeLatestArticles() {
  try {
    const { data } = await axios.get(BLOG_URL);
    const $ = cheerio.load(data);

    const links = $("a[href^='/blogs/']")
      .map((i, el) => $(el).attr("href"))
      .get();

    const uniqueLinks = [...new Set(links)].filter(
      (l) => l !== "/blogs/" && !l.includes("#")
    );

    let insertedCount = 0;

    for (const link of uniqueLinks) {
      if (insertedCount === 5) break;

      const articleUrl = BASE_URL + link;

      try {
        const articlePage = await axios.get(articleUrl);
        const $$ = cheerio.load(articlePage.data);

        const title = $$("h1").first().text().trim();

        const paragraphs = $$("article p")
          .map((i, el) => $$(el).text().trim())
          .get();

        const content = paragraphs.join("\n\n");

        if (!title || content.length < 200) continue; // skip weak pages

        await new Promise((resolve, reject) => {
          db.run(
            "INSERT INTO articles (title, content, source) VALUES (?, ?, ?)",
            [title, content, "BeyondChats"],
            function (err) {
              if (err) reject(err);
              else {
                insertedCount++;
                console.log(`Inserted (${insertedCount}/5): ${title}`);
                resolve();
              }
            }
          );
        });
      } catch {
        continue;
      }
    }

    console.log(`✅ Finished. Total inserted: ${insertedCount}`);
  } catch (err) {
    console.error("Scraping error:", err.message);
  }
}

scrapeLatestArticles();