
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  role: {
    type: String,
    default: "User"
  },

  status: {
    type: String,
    default: "Active"
  }

}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
