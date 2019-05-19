import { Schema, model } from "mongoose";

const userSchema = new Schema({
  id: String,
  email: String,
  password: String,
  name: String
});

export default model("User", userSchema);
