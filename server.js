const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // This allows handling JSON data
app.use(express.static("public")); // To serve static HTML/CSS/JS

// Serve book.html for the main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "book.html"));
});

// Handle form submission
app.post("/book", (req, res) => {
  const booking = {
    name: req.body.name,
    email: req.body.email,
    event: req.body.event,
  };

  const dataPath = path.join(__dirname, "bookings.json");
  let bookings = [];

  if (fs.existsSync(dataPath)) {
    bookings = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  }

  bookings.push(booking);

  fs.writeFileSync(dataPath, JSON.stringify(bookings, null, 2));

  res.json({ message: "Booking received successfully! 🎉" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
