const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  site: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  }
  
});


const Project = mongoose.model("Project", userSchema);

module.exports = Project;
