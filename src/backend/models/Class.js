import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  level: String,
  schedule: String
});

export default mongoose.model("Class", classSchema);
