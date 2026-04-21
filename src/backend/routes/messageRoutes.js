import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

router.post("/", async (req, res) => {
  const msg = await Message.create(req.body);
  res.json({ success: true, msg });
});

export default router;
