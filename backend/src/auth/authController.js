// src/auth/authController.js
const User = require("../models/userModel");

async function register(req, res) {
  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Save user to DB (placeholder for now)
  await User.createUser(username, password, role);

  res.status(201).json({ message: "User registered successfully" });
}

module.exports = { register };
