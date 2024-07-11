import React from "react";
import bookList from "../assets/bookList.json";
import TextYellow from "../styles/TextYellow";
import BookCard from "./featured-books-section/BookCard";

export default function FeaturedBookList() {
  const filteredBooks = bookList.filter((book) => {
    return book.category === "free";
  });
  console.log(filteredBooks);
  return (
    <>
      <div className="mx-w-screen-2xl container mx-auto md:px-10 px-4 flex flex-col justify-start">
        <div className="flex  flex-col gap-6 mr-4 md:mr-0">
          <h1 className="text-xl md:text-2xl font-bold">
            Featured <TextYellow text="Books" />
          </h1>
          <p className="text-sm mr-4 md:mr-4 md:text-md">
            Welcome to our Featured Books section, where we highlight must-read
            titles that offer profound insights and captivating stories. Each
            selection is curated to inspire, educate, and entertain, ensuring a
            diverse range of genres and topics to pique your interest. Dive into
            these exceptional works and discover the brilliance of acclaimed
            authors and thought leaders.
          </p>
        </div>
        <div className="mt-8 flex gap-16 flex-grow flex-wrap">
          {filteredBooks.map((book, index) => (
            <BookCard
              key={index}
              name={book.name}
              description={book.description}
              author={book.author}
              img={book.img}
              category={book.category}
            />
          ))}
        </div>
      </div>
    </>
  );
}
