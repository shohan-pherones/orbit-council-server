const express = require("express");
const {
  createProject,
  getProjects,
  getProject,
} = require("../controllers/projectController");

// router
const router = express.Router();

// GET all projects
router.get("/", getProjects);

// GET a single project
router.get("/:id", getProject);

// POST a new project
router.post("/", createProject);

// DELETE a project
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a project" });
});

// UPDATE a project
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a project" });
});

module.exports = router;
