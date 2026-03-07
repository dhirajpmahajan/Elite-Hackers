const express = require("express");
const router = express.Router();
const db = require("../db");

// CREATE EVENT (Admin)
router.post("/", (req, res) => {
  const { title, date } = req.body;

  const sql = "INSERT INTO events (title, date) VALUES (?, ?)";

  db.query(sql, [title, date], (err, result) => {
    if (err) return res.status(500).json({ message: "Error creating event" });

    res.json({ message: "Event created successfully" });
  });
});

// GET ALL EVENTS
router.get("/", (req, res) => {
  db.query("SELECT * FROM events", (err, results) => {
    if (err) return res.status(500).json({ message: "Error fetching events" });

    res.json(results);
  });
});

// REGISTER FOR EVENT
router.post("/register", (req, res) => {
  const { participantId, eventId } = req.body;

  const sql = "INSERT INTO registrations (participant_id, event_id) VALUES (?, ?)";

  db.query(sql, [participantId, eventId], (err, result) => {
    if (err) return res.status(500).json({ message: "Already registered or error" });

    res.json({ message: "Registered successfully" });
  });
});

module.exports = router;