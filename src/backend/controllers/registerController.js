import Registration from "../models/Registration.js";

export const registerStudent = async (req, res) => {
  try {
    const newReg = new Registration(req.body);
    await newReg.save();
    res.json({ message: "Registration successful" });
  } catch (err) {
    res.status(500).json({ error: "Registration failed" });
  }
};
