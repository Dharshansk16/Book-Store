import React from "react";
import BookList from "../components/BookList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Books() {
  return (
    <div>
      <Navbar />
      <BookList />
      <Footer />
    </div>
  );
}
