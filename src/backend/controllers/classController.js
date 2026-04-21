import Class from "../models/Class.js";

export const getClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (err) {
    res.status(500).json({ error: "Failed to load classes" });
  }
};
