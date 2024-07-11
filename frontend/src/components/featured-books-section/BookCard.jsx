import React from "react";
import Button from "../banner/Button";

export default function BookCard({ name, description, author, category, img }) {
  return (
    <div className="mb-8">
      <div
        style={{ height: "500px" }}
        className="card bg-base-100 w-96 shadow-xl"
      >
        <figure>
          <img src={img} alt={author} className="object-cover w-full h-full" />
        </figure>
        <div className="card-body h-1/3 flex flex-col gap-4">
          <h2 className="card-title text-md">
            {name}
            <div className="badge badge-secondary">{category}</div>
          </h2>
          <div className="flex flex-col justify-center mx-auto w-40">
            {/* <p className="text-sm">{description}</p> */}
            <button
              style={{ borderRadius: "50px" }}
              className="bg-base-200 px-3 py-2 text-md border border-white   hover:bg-yellow-500  hover:text-white"
            >
              Download
            </button>
          </div>
          <div className="card-actions justify-end items-end  ml-4">
            <div>~{author}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
