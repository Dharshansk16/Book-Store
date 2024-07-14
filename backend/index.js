import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("hello darsh");
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
