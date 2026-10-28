# Node.js JWT Authentication Project

A simple learning project to implement User Authentication using JSON Web Tokens (JWT), Express, and MongoDB.

## 🚀 Features

- **User Registration**: Sign up with a unique username and password.
- **Password Hashing**: Secure password storage using `bcrypt`.
- **User Login**: Authenticate users and generate a JWT token upon successful login.
- **Protected Routes**: Secure API endpoints using a custom JWT authentication middleware.
- **MongoDB Integration**: User data is persisted in a MongoDB database via `mongoose`.

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT), bcrypt
- **Environment Management**: dotenv

## 📂 Project Structure

```text
.
├── config/
│   └── db.js                # Database connection configuration
├── controllers/
│   ├── auth.controller.js    # Logic for signup and login
│   └── private.controller.js  # Logic for protected routes
├── middlewares/
│   └── auth.middleware.js     # JWT verification middleware
├── models/
│   └── user.model.js          # Mongoose user schema and password hashing
├── routes/
│   ├── auth.routes.js         # Authentication endpoints
│   └── private.routes.js       # Protected endpoints
├── index.js                   # Application entry point
└── package.json               # Project dependencies and scripts
```

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jwt-auth-implementation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secret_key
   ```

4. **Run the application**
   ```bash
   npm run dev
   ```

## 🔌 API Endpoints

### Authentication Routes (`/auth`)
| Method | Endpoint | Description | Body |
| :--- | :--- | :--- | :--- |
| POST | `/auth/signup` | Register a new user | `{ "username": "...", "password": "..." }` |
| POST | `/auth/login` | Login and receive token | `{ "username": "...", "password": "..." }` |

### Private Routes (`/private`)
| Method | Endpoint | Description | Header |
| :--- | :--- | :--- | :--- |
| GET | `/private/` | Access a protected resource | `Authorization: <your_jwt_token>` |

## 📝 Learning Objectives
This project was built to understand:
- How to implement a secure registration and login flow.
- How `bcrypt` works for hashing and comparing passwords.
- The lifecycle of a JWT (Signing $\rightarrow$ Sending $\rightarrow$ Verifying).
- Creating middleware to protect specific routes in an Express application.
