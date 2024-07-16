import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./routes/book.js";
import userRoute from "./routes/user.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGO_DB_URI = process.env.MONGO_DB_URI;

try {
  mongoose.connect(MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to Database");
} catch (error) {
  console.log("Error", Error);
}

//routes

// fetch books
app.use("/book", bookRoute);

//user registration and login
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
