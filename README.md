Backend Assignment – Scalable REST API with Auth & Role-Based Access
📌 Project Overview

This project implements a secure, scalable backend system with authentication, role-based access control, and CRUD operations, along with a basic frontend UI to demonstrate API usage.

The system supports:

User registration & login with JWT authentication

Role-based access (user vs admin)

CRUD operations on a secondary entity (Tasks)

Admin-level user and task management

A minimal frontend to interact with APIs

🛠 Tech Stack
Backend

Node.js

Express.js

MongoDB + Mongoose

JWT (jsonwebtoken)

bcryptjs

dotenv

cors

Frontend

React (Vite)

Axios

JWT Decode

Plain CSS (no UI framework)

🔐 Authentication & Authorization

Passwords are hashed using bcrypt

JWT is issued on successful login

JWT payload contains:

{
  "userId": "...",
  "role": "user | admin"
}


Role-based access is enforced using middleware on the backend

Frontend UI adapts based on role, but backend is the final authority

📂 Project Structure (Backend)
backend-assignment/
│
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── task.controller.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── role.middleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── task.routes.js
│   │   └── admin.routes.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env.example
├── package.json
└── README.md

📂 Project Structure (Frontend)
frontend/
│
├── src/
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   └── MainPage.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── utils/
│   │   └── auth.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── package.json

🚀 How to Run the Project
1️⃣ Clone the repository
git clone https://github.com/vedant0000/backend-assignment.git
cd backend-assignment

2️⃣ Backend Setup
npm install


Create a .env file using the example:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run backend:

npm run dev


Backend will run on:

http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend will run on:

http://localhost:5173

🔄 API Overview
Auth APIs
Method	Endpoint	Description
POST	/api/v1/auth/register	Register user
POST	/api/v1/auth/login	Login user
Task APIs (JWT required)
Method	Endpoint	Access
GET	/api/v1/tasks	User/Admin
POST	/api/v1/tasks	User
PUT	/api/v1/tasks/:id	Owner/Admin
DELETE	/api/v1/tasks/:id	Owner/Admin
Admin APIs (Admin only)
Method	Endpoint	Description
GET	/api/v1/admin/users	Get all users (role=user)
POST	/api/v1/admin/tasks	Add task to specific user
DELETE	/api/v1/admin/users/:id	Delete user & their tasks
🖥 Frontend Functionality
User

Register & Login

View own tasks

Logout

Admin

View all users (email + ObjectId)

Add task to a specific user

Delete user

View all tasks

Dashboard UI adapts automatically based on role decoded from JWT.

📈 Scalability & Future Enhancements

This project is structured to scale easily:

Modular architecture (routes, controllers, middleware)

Can be split into microservices

JWT allows stateless auth (horizontal scaling)

Can add Redis for caching

Can add rate limiting & logging

Ready for Docker containerization

Password reset & email verification can be added

✅ Evaluation Checklist (Covered)

✔ RESTful API design

✔ Secure authentication (JWT + hashing)

✔ Role-based access control

✔ Database schema design

✔ Functional frontend integration

✔ Clean Git commits & structure

✔ Scalability considerations

📌 Notes

.env is intentionally excluded from Git

UI is minimal by design; focus is on backend correctness

👤 Author

Vedant Hule