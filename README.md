
# 🛠️ Todo List App — Backend

This repository contains the **backend server** for the Todo List application built using **Node.js** and **Express.js**. It provides a simple REST API to manage tasks including adding, updating, deleting, and fetching task data.

---

## 🌐 Live API URL

🟢 **Backend Render URL:**  
🔗 [https://todo-backend-044v.onrender.com](https://todo-backend-044v.onrender.com)

---

## 🧩 Description

The backend manages task data stored in a JSON file (`tasks.json`). It exposes endpoints that support **CRUD operations** and is designed to work with any frontend client via RESTful communication.

This backend works seamlessly with the [frontend](https://github.com/Nithisha78/todo-frontend) deployed on Netlify and ensures smooth task management.

---

## 🔌 API Endpoints

| Method | Endpoint              | Description                |
|--------|-----------------------|----------------------------|
| GET    | `/tasks`              | Fetch all tasks            |
| POST   | `/tasks`              | Add a new task             |
| PUT    | `/tasks/:id`          | Edit or mark a task done   |
| DELETE | `/tasks/:id`          | Delete a task              |

All data is persisted in `tasks.json`.

---

## ⚙️ Technologies Used

- **Backend Framework:** Node.js with Express
- **Data Storage:** Local JSON file (`tasks.json`)
- **Middleware:** CORS, body-parser (via `express.json()`)
- **Hosting:** [Render](https://render.com)

---

## 📁 Folder Structure

