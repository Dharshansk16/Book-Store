import Book from "../models/book.js";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error occured at getBook", error);
    res.status(500).json(error);
  }
};
