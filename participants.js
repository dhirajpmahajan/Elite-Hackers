const express = require("express");
const router = express.Router();
const db = require("../db");

// REGISTER PARTICIPANT
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const sql = "INSERT INTO participants (name, email, password) VALUES (?, ?, ?)";
  
  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      return res.status(400).json({ message: "Email already exists" });
    }
    res.json({ message: "Registration successful" });
  });
});

// LOGIN PARTICIPANT
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM participants WHERE email = ? AND password = ?";
  
  db.query(sql, [email, password], (err, results) => {
    if (err) return res.status(500).json({ message: "Server error" });

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ participantId: results[0].id });
  });
});

// GET REGISTERED EVENTS FOR PARTICIPANT
router.get("/:participantId/events", (req, res) => {
  const participantId = req.params.participantId;

  const sql = `
    SELECT events.id, events.title, events.date
    FROM registrations
    JOIN events ON registrations.event_id = events.id
    WHERE registrations.participant_id = ?
  `;

  db.query(sql, [participantId], (err, results) => {
    if (err) return res.status(500).json({ message: "Server error" });
    res.json(results);
  });
});

module.exports = router;