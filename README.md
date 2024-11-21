# WhatsApp Demo Project 1

## Overview
This project is a demo chat application built with a **React Vite** frontend and a **Node.js/Express.js** backend. The application supports sending messages, file uploads, and database integration using MySQL.

---

## Features
### Frontend
- Built with **React Vite** for fast performance and development.
- Libraries used:
  - **react-toastify**: Toast notifications.
  - **date-fns**: Date formatting.
  - **axios**: API calls.
### Frontend Setup
   1. Create a React project with Vite:
   ```bash 
        .npm create vite@latest chat-app --template react
        .cd chat-app
   2. Install frontend dependencies:
    ```bash
    npm install
    npm install react-toastify
    npm install date-fns
    npm install axios
3. Start the frontend development server:
    ```bash
        .npm run dev
4. Open the application in your browser at http://localhost:5173

### Backend
- Developed with **Node.js** and **Express.js**.
- Libraries used:
  - **cors**: Enable cross-origin requests.
  - **mysql2**: Connect and query MySQL databases.

1. Navigate to the backend directory:
   ```bash 
    .cd whatsapp_demo_project1/backend
    .cd backend
   2. Install frontend dependencies:
    ```bash
    npm install
    npm install express cros mysql2
3. Create Database:
    CREATE DATABASE databaseName;
    
    USE databaseName;

    CREATE TABLE TabelName (
  id INT AUTO_INCREMENT PRIMARY KEY,
  message TEXT NOT NULL,
  sender VARCHAR(100) NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

4. Run the backend server: node server.js
5. The backend will run on http://localhost:5000.

## Prerequisites
- **Node.js** and **npm** installed on your system.
- **MySQL server** installed and running.

How to Use
1. Start both frontend and backend servers.
2. Use the app to:
    .Send messages.
    .Upload and send files.
    .Store data in the MySQL database.

Dependencies
    1.Frontend
        .react
        .react-dom
        .react-toastify
        .date-fns
        .axios
    
    2.Backend
        .express
        .cors
        .mysql2

## Installation and Setup

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/whatsapp_demo_project1.git

Author
Shadman Shakib
Contact: shakibshekh533@gmail.com