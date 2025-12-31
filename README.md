# BeyondChats – Full Stack Developer Intern Assignment

This project is part of the assignment round for the **Full Stack Developer Intern** role at **BeyondChats**.

The goal of this assignment is to scrape blog articles from BeyondChats, store them in a database, expose CRUD APIs, and build a simple frontend to display the articles.

---

##  Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Web Scraping:** Axios, Cheerio
- **Frontend:** React.js (Phase 3)
- **Tools:** Postman, Git, npm

---

## 📌 Features Implemented (Phase 1 – Completed)

- Scraped the **5 oldest blog articles** from BeyondChats
- Extracted article title and full content
- Stored scraped articles in **MySQL database**
- Implemented full **CRUD APIs**:
  - Create article
  - Read articles
  - Update article
  - Delete article
- Structured backend using **routes and controllers**

---

## 📂 Project Structure

- beyondchats-assignment/
- │
- ├── controllers/
- │ └── articleController.js
- ├── routes/
- │ └── articleRoutes.js
- ├── scraper.js
- ├── db.js
- ├── server.js
- ├── package.json
- └── README.md
- └── frontend/
-    ├── src/
-   │   └── App.js         # React UI
-    ├── public/
-    └── package.json

---

## 🔁 Data Flow / Architecture

1. **Scraper (`scraper.js`)**
   - Fetches blog listing page
   - Extracts article links
   - Visits individual article pages
   - Extracts full content
   - Stores data in MySQL

2. **Backend API (Node + Express)**
   - Connects to MySQL database
   - Exposes REST APIs for CRUD operations

3. **Frontend (React)**
   - Fetches articles from backend APIs
   - Displays original and updated articles

---

## 🛠️ API Endpoints

| Method | Endpoint | Description |
|------|---------|------------|
| GET | `/articles` | Fetch all articles |
| POST | `/articles` | Create a new article |
| PUT | `/articles/:id` | Update an article |
| DELETE | `/articles/:id` | Delete an article |

---

## 🧪 Local Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone <your-github-repo-link>
cd beyondchats-assignment

