const express = require("express");
const Project = require("./userSchema");
const router = express.Router();

router.post("/project", async (req, res) => {
  const { title, description, source, site, img } = req.body;

  const project = new Project({ title, description, source, site, img });

  const projectsave = await project.save();

  if (projectsave) {
    console.log("project uploaded");

    return res.status(201).json({ message: "success" });
  }
});

router.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
