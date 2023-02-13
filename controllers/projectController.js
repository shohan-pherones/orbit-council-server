const mongoose = require("mongoose");
const Project = require("../models/projectModel");

// get all projects
const getProjects = async (req, res) => {
  const projects = await Project.find({}).sort({ createdAt: -1 }); // newest one at the top --> descending

  res.status(200).json({ projects });
};

// get a single project
const getProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No project found" });
  }

  const project = await Project.findById(id);

  if (!project) {
    return res.status(404).json({ error: "No project found" });
  }

  res.status(200).json(project);
};

// create new project
const createProject = async (req, res) => {
  const { title, tech, budget, duration, manager, dev } = req.body;

  try {
    const project = await Project.create({
      title,
      tech,
      budget,
      duration,
      manager,
      dev,
    });
    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete a project

// update a project

module.exports = {
  getProjects,
  getProject,
  createProject,
};
