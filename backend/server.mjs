import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.mjs";
const app = express();
dotenv.config();
connectDB();


app.get("/", (req, res) => {
  res.send("Hello, abhi!");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
