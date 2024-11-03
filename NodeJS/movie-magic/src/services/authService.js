import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants.js";
import User from "../models/User.js";

const register = (email, password) => {
  //Check if user exists
  return User.create({ email, password });
};

const login = async (email, password) => {
  // Check if user exists
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User does not exists!");
  }

  //Validate password
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("Password doesn't match ! ");
  }

  //Generate JWT Token
  const payload = { email, _id: user._id };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "2h" });

  //Return JWT Token
  return token;
};

export default {
  register,
  login,
};
