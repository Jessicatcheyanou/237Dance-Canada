import express from "express";
import Instructor from "../models/Instructor.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const instructors = await Instructor.find();
  res.json(instructors);
});

router.post("/", async (req, res) => {
  const newInstructor = await Instructor.create(req.body);
  res.json(newInstructor);
});

export default router;
