const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Teacher", "Student"],
    default: "Student",
  },
  classes: {
    type: [String],
  },
  activities: {
    type: [String],
  },
  budget: {
    type: String,
  },
  todos: {
    type: [String],
  },
  homework: [
    {
      assignment: {
        type: String,
        required: true,
      },
      duedate: {
        type: Date,
        required: true,
      },
      details: {
        type: String,
      },
      completed: {
        type: Boolean,
        default: false,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("user", UserSchema);