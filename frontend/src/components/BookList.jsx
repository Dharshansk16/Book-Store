import React from "react";
import BookCard from "./featured-books-section/BookCard";
// import bookList from "../constants/bookList.json";
import TextYellow from "../styles/TextYellow";
import { useState, useEffect } from "react";
import axios from "axios";

export default function BookList() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const fetchBookList = async () => {
      try {
        const response = await axios.get("http://localhost:8001/book/");
        console.log("Fetched Data", response.data);
        setBookList(response.data);
      } catch (error) {
        console.log("Error occured while fetching the data", error);
      }
    };
    fetchBookList();
  }, []);
  return (
    <div className="md:max-w-screen-2xl  max-w-sm  my-6 flex flex-col items-center mx-4">
      <div className="flex flex-col gap-4 items-center text-center">
        <h1 className="md:text-4xl text-2xl font-bold">
          Step into the <TextYellow text="Book Zone" />
        </h1>
        <p className="md:text-2xl text-xl font-semibold">
          <TextYellow text="Grab a Book" /> It's Cheaper Than Therapy
        </p>
      </div>
      <div className="mt-12 grid  grid-cols-1 md:grid-cols-3 gap-x-20">
        {bookList.map((book) => (
          <BookCard
            key={book.id}
            name={book.name}
            author={book.author}
            category={book.category}
            img={book.img}
          />
        ))}
      </div>
    </div>
  );
}
