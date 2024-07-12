import React from "react";
import BookList from "../components/BookList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Books() {
  return (
    <div>
      <BookList />
    </div>
  );
}
