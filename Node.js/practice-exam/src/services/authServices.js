import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants.js";
import User from "../models/User.js";

const register = (username, email, password) => {
  return User.create({ username, email, password });
};

const login = async (username, password) => {
  // Check if user exists
  const user = await User.findOne({ username });

  if (!user) {
    throw new Error("User does not exist");
  }

  // Validate password
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("Password doesn't match ! ");
  }
  // Generate token
  const payload = { username, _id: user._id };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "2h" });

  return token;
};

export default {
  register,
  login,
};
