require("dotenv").config();

const express = require("express");
const projectRoutes = require("./routes/projectRoute");

// express app
const app = express();

// middlewares
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/projects", projectRoutes);

// port
const port = process.env.PORT || 5000;

// listen for requests
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
