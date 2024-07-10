import React from "react";
import TextYellow from "../styles/TextYellow";
import EmailInput from "./banner/EmailInput";
import Button from "./banner/Button";

export default function Banner() {
  return (
    <>
      <div className="mx-w-screen-2xl container mx-auto md:px-10 px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 m-4 md:m-8">
          <div className="flex  flex-col gap-10 mr-4 md:mr-0">
            <h1 className="text-4xl font-bold">
              Welcome to <TextYellow text="bookStore" /> <br />
              Discover Your Next Great <TextYellow text="Read With Us" />
            </h1>
            <p className="mr-4 md:mr-4 md:text-l">
              Discover a world of stories at <TextYellow text="bookStore" />.
              From the latest bestsellers to timeless classics, our collection
              has something for every reader. Dive into new adventures and let
              us help you find your next great read.
            </p>
            <div className="flex flex-col gap-2 md:flex-row">
              <EmailInput />
              <Button value="send" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 ">
          <div className="container ml-12">
            <img
              className="h-full w-3/4"
              src="../src/assets/book-store-ai.png"
              alt="bookStore"
            />
          </div>
        </div>
      </div>
    </>
  );
}
