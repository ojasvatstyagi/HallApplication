// controllers/user.controller.js
import User from "../models/User.js";
import bcrypt from "bcryptjs";

// Controller to handle user-related operations
export async function createUser(req, res) {
  const { name, email, role, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, role, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
}

export async function getUserRequests(req, res) {
  try {
    const userId = req.user.id; // Assuming authentication middleware sets req.user
    const requests = await Request.find({ user_id: userId }).populate(
      "hall_id"
    );
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: "Error fetching requests", error });
  }
}
