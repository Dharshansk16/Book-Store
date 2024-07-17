import React from "react";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div
      className="dark:bg-base-100 dark:text-gray-200 bg-gray-100
   text-gray-700"
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </Router>
      <Toaster />
    </div>
  );
}
