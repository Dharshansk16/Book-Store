import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import FeaturedBookList from "../components/FeaturedBookList";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <FeaturedBookList />
      <Footer />
    </div>
  );
}
