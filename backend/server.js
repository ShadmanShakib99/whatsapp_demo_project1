const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// MySQL ডাটাবেস কানেকশন
// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "your user id",
  password: "your password",
  database: "Database Name",
});

db.connect((err) => {
  if (err) {
    console.log("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database");
  }
});

// মেসেজ সেভ করার API
// message save api
app.post("/messages", (req, res) => {
  const { message, sender } = req.body;
  const time = new Date().toISOString().slice(11, 19); // HH:MM:SS

  const query = "INSERT INTO messages (message, sender, time) VALUES (?, ?, ?)";
  db.query(query, [message, sender, time], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Failed to save message", error: err });
    }
    res.status(200).json({ message: "Message saved successfully", data: result });
  });
});

// ডাটাবেস থেকে মেসেজ রিট্রিভ করার API
// API to retrieve messages from database
app.get("/messages", (req, res) => {
  db.query("SELECT * FROM messages ORDER BY time", (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Failed to retrieve messages", error: err });
    }
    res.status(200).json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
