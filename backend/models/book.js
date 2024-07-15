import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  author: String,
  category: String,
  img: String,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
