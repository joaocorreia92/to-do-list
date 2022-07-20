const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  check: {
    type: Boolean,
    require: true,
  },
  date: {
    type: date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Task", taskSchema);
