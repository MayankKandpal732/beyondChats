import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    fetch("https://beyondchats-backend-o5i4.onrender.com/articles")
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
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Loading articles...
      </h2>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f9fafb, #eef2f7)",
        padding: "30px 16px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "8px",
            fontSize: "2.2rem",
            color: "#1f2937",
          }}
        >
          BeyondChats Blog Articles
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            marginBottom: "40px",
          }}
        >
          Scraped and stored articles from BeyondChats
        </p>

        {articles.length === 0 && (
          <p style={{ textAlign: "center" }}>No articles found.</p>
        )}

        {}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {articles.map((article) => (
            <div
              key={article.id}
              style={{
                backgroundColor: "#fff",
                padding: "22px",
                borderRadius: "12px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-4px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <h3
                style={{
                  marginBottom: "12px",
                  color: "#111827",
                  fontSize: "1.15rem",
                }}
              >
                {article.title}
              </h3>

              <p
                style={{
                  whiteSpace: "pre-line",
                  color: "#374151",
                  lineHeight: "1.6",
                  marginBottom: "14px",
                }}
              >
                {article.content.substring(0, 220)}...
              </p>

              <button
                onClick={() => setSelectedArticle(article)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#2563eb",
                  cursor: "pointer",
                  fontWeight: "500",
                  padding: 0,
                  marginBottom: "10px",
                }}
              >
                Read full article →
              </button>

              <div
                style={{
                  fontSize: "0.85rem",
                  color: "#6b7280",
                  borderTop: "1px solid #e5e7eb",
                  paddingTop: "10px",
                }}
              >
                Source: {article.source}
              </div>
            </div>
          ))}
        </div>
      </div>

      {}
      {selectedArticle && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            zIndex: 1000,
          }}
          onClick={() => setSelectedArticle(null)}
        >
          <div
            style={{
              background: "#fff",
              maxWidth: "800px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              borderRadius: "12px",
              padding: "24px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ marginBottom: "12px" }}>
              {selectedArticle.title}
            </h2>

            <p
              style={{
                whiteSpace: "pre-line",
                lineHeight: "1.7",
                color: "#374151",
              }}
            >
              {selectedArticle.content}
            </p>

            <button
              onClick={() => setSelectedArticle(null)}
              style={{
                marginTop: "20px",
                padding: "8px 14px",
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
