import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import { SALT_ROUNDS } from "../config/constants.js";

const userSchema = new Schema({
  username: String,
  email: String,
  password: {
    type: String,
    minLength: [3, "Your password is too short"],
  },
});

userSchema.pre("save", async function () {
  const hash = await bcrypt.hash(this.password, SALT_ROUNDS);

  this.password = hash;
});

const User = model("User", userSchema);

export default User;
