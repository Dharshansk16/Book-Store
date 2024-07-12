import React from "react";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </Router>
  );
}
