import React from "react";
import BookCard from "./featured-books-section/BookCard";
import bookList from "../assets/bookList.json";

export default function BookList() {
  return (
    <div className="md:container md:mx-auto flex flex-wrap gap-16 justify-center my-8">
      {bookList.map((book) => (
        <BookCard
          name={book.name}
          author={book.author}
          category={book.category}
          img={book.img}
          cardWidth="96"
        />
      ))}
    </div>
  );
}
