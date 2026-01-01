# Backend Assignment – Scalable REST API with Auth & Role-Based Access

## 🚀 Project Overview
This project builds a **scalable backend system** with secure authentication, role-based access control, and full CRUD operations. A **basic frontend UI** is included to demonstrate workflow and API usage.

The system provides:
- User registration and login with JWT authentication
- Role-based access (`user` and `admin`)
- CRUD operations for a secondary entity (Tasks)
- Admin controls for user and task management
- Simple frontend UI integrating backend APIs

---

## 🛠 Tech Stack

### Backend
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT authentication**
- **bcryptjs for hashing**
- **dotenv for environment variables**
- **CORS for cross-origin support**

### Frontend
- **React (Vite)**
- **Axios for API calls**
- **JWT Decode for frontend role detection**
- **CSS for simple styling**

---
## 📥 How to Run the Project

### 1️⃣ Backend Setup
1. Install dependencies:
   ```bash
   npm install

2. Create .env from .env.example

3. Start the server:
   ```bash
   npm run dev

Backend server will run at: http://localhost:5000

### 2️⃣ Frontend Setup
1. Navigate into frontend:
   ```bash
   cd frontend

2. Install dependencies:
   ```bash
   npm install

3. Start frontend:
   ```bash
   npm run dev

Frontend UI will run at: http://localhost:5173

### 🖥 Frontend Functionality
### User
Register and login

View own tasks

Logout

### Admin
View all users (email + ObjectId)

Add task for specific user

Delete a user

View all tasks

UI adapts based on role decoded from JWT