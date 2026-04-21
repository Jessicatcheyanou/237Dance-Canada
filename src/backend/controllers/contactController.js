import Message from "../models/Message.js";

export const sendMessage = async (req, res) => {
  try {
    const msg = new Message(req.body);
    await msg.save();
    res.json({ message: "Message sent" });
  } catch (err) {
    res.status(500).json({ error: "Failed to send message" });
  }
};
