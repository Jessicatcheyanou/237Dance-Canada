import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  selectedClass: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Registration", registrationSchema);


