import Instructor from "../models/Instructor.js";

export const getInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.json(instructors);
  } catch (err) {
    res.status(500).json({ error: "Failed to load instructors" });
  }
};
