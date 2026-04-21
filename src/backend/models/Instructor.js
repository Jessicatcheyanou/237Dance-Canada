import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  photo: String,
  styles: [String]
});

export default mongoose.model("Instructor", instructorSchema);
