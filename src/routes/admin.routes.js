const express = require("express");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const User = require("../models/User");
const Task = require("../models/Task");

const router = express.Router();

router.use(auth);
router.use(role("admin"));

// Get all users with role=user
router.get("/users", async (req, res) => {
  const users = await User.find({ role: "user" }).select("-password");
  res.json(users);
});

// Delete user
router.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  await Task.deleteMany({ user: req.params.id });
  res.json({ message: "User deleted" });
});

// Add task to specific user
router.post("/tasks", async (req, res) => {
  const { userId, title } = req.body;
  const task = await Task.create({ title, user: userId });
  res.status(201).json(task);
});

// Delete any task
router.delete("/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

module.exports = router;
