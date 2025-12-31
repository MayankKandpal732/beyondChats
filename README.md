# BeyondChats – Full Stack Developer Intern Assignment

This project is part of the assignment round for the **Full Stack Developer Intern** role at **BeyondChats**.

The goal of this assignment is to scrape blog articles from BeyondChats, store them in a database, expose CRUD APIs, and build a simple frontend to display the articles.

---

## 🚀 Live Demo

- **Frontend (Vercel):**  
  👉 https://beyond-chats-iota.vercel.app/

- **Backend API (Render):**  
  👉 https://beyondchats-backend-o5i4.onrender.com/articles

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js

### Database
- SQLite (used for deployment stability)
- MySQL (intended production database)

### Web Scraping
- Axios
- Cheerio

### Frontend
- React.js (Create React App)

### Tools
- Git
- npm
- Postman

---

## 📌 Features Implemented

### Backend
- Scraped blog articles from BeyondChats
- Extracted article title and full content
- Stored scraped data in database
- Implemented full **CRUD APIs**:
  - Create article
  - Read articles
  - Update article
  - Delete article
- Structured backend using routes and controllers

### Frontend
- Fetches articles from backend API
- Displays articles in responsive card layout
- Modal popup for reading full article content
- Clean and minimal UI

---

## 📂 Project Structure

- beyondchats-assignment/
- │
- ├── controllers/
- │ └── articleController.js
- │
- ├── routes/
- │ └── articleRoutes.js
- │
- ├── scraper.js
- ├── db.js
- ├── server.js
- ├── package.json
- ├── README.md
- │
- └── frontend/
- ├── src/
- │ ├── App.js
- │ ├── App.css
- │ └── index.js
- ├── public/
- └── package.json


---

## 🔁 Data Flow / Architecture

1. **Scraper (`scraper.js`)**
   - Fetches blog pages using Axios
   - Parses HTML using Cheerio
   - Extracts article title and full content
   - Stores data in the database

2. **Backend API (Node + Express)**
   - Connects to database
   - Exposes REST APIs for CRUD operations

3. **Frontend (React)**
   - Fetches data from backend APIs
   - Displays articles in UI
   - Uses modal popup for full article view

---

## 🛠 API Endpoints

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

#backend setup
npm install
node scraper.js
node server.js

#frontend setup
cd frontend
npm install
npm start

```

**Design Decisions**
- SQLite was chosen to simplify deployment and avoid external database setup.

- Some blog pages are client-side rendered, so specific article URLs were scraped directly for reliability.

- Duplicate handling is intended to be enforced at the database layer when migrated to MySQL.

**Author**
Mayank Kandpal
Full Stack Developer
Graphic Era University (2027)

**License**
- This project is created for educational and assignment purposes.