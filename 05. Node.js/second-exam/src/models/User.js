import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import { SALT_ROUNDS } from "../constants.js";



const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function () {
  const hash = await bcrypt.hash(this.password, SALT_ROUNDS);

  this.password = hash;
});

const User = model("User", userSchema);

export default User;