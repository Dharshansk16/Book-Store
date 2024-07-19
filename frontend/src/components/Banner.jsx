import React from "react";
import TextYellow from "../styles/TextYellow";
import EmailInput from "./banner/EmailInput";
import Button from "./banner/Button";
import AutoPlay from "./banner/Carousel";

export default function Banner() {
  return (
    <>
      <div className="md:max-w-screen-2xl max-w-sm md:container md:mx-auto md:px-10  flex flex-col md:flex-row ">
        <div className="w-full md:w-7/12 my-4 mx-2 md:mx-2 md:my-8">
          <div className="flex  flex-col gap-8">
            <h1 className="md:text-4xl text-2xl font-bold">
              Welcome to <TextYellow text="bookStore" /> <br />
              Discover Your Next Great <TextYellow text="Read With Us" />
            </h1>
            <p className="md:mr-4 md:text-lg">
              Discover a world of stories at <TextYellow text="bookStore" />.
              From the latest bestsellers to timeless classics, our collection
              has something for every reader. Dive into new adventures and let
              us help you find your next great read.
            </p>
            <div className="mb-4">
              <AutoPlay />
            </div>
            <div className="flex flex-col gap-2 md:flex-row">
              <EmailInput />
              <Button value="send" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <div className="container">
            <img
              className="h-full w-11/12"
              src="../src/assets/book-store-ai.png"
              alt="bookStore"
            />
          </div>
        </div>
      </div>
      <div className="mb-8">
        <hr />
      </div>
    </>
  );
}
