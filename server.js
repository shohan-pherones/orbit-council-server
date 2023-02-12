require("dotenv").config();

const express = require("express");

// express app
const app = express();

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app" });
});

// port
const port = process.env.PORT || 5000;

// listen for requests
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
