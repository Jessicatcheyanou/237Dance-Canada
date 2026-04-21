import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import classRoutes from "./routes/classRoutes.js";
import instructorRoutes from "./routes/instructorRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();
const app = express();

// This allows your frontend to fetch data
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/classes", classRoutes);
app.use("/api/instructors", instructorRoutes);
app.use("/api/messages", messageRoutes);

console.log(process.env.MONGO_URI); // Should print the MongoDB URI

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://jessicatcheyanou_db_user:yOCiYCH37GL3VWPR@237dance.cddvfbc.mongodb.net/?appName=237Dance")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));
