import { Schema, model } from "mongoose";

const tagSchema = new Schema({
  id: String,
  name: String,
  relationalTags: Array
});

export default model("Tag", tagSchema);
