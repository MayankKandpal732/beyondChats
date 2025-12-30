import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading articles...</h2>;
  }

  return (
  <div
    style={{
      minHeight: "100vh",
      backgroundColor: "#f4f6f8",
      padding: "20px",
      boxSizing: "border-box",
    }}
  >
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "5px" }}>
        BeyondChats Blog Articles
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#555",
          marginBottom: "30px",
        }}
      >
        Scraped and stored articles from BeyondChats
      </p>

      {articles.length === 0 && <p>No articles found.</p>}

      {articles.map((article) => (
        <div
          key={article.id}
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ marginBottom: "10px", color: "#222" }}>
            {article.title}
          </h3>

          <p
            style={{
              whiteSpace: "pre-line",
              color: "#444",
              lineHeight: "1.6",
              marginBottom: "12px",
            }}
          >
            {article.content.substring(0, 300)}...
          </p>

          <small style={{ color: "#777" }}>
            Source: {article.source}
          </small>
        </div>
      ))}
    </div>
  </div>
);
}

export default App;