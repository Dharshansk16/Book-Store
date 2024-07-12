import React from "react";
export default function BookCard({
  name,
  description,
  author,
  category,
  img,
  cardWidth,
}) {
  return (
    <div className="flex md:justify-center ml-4 md:mx-auto my-8">
      <div
        style={{ height: "500px" }}
        className={`card bg-base-100  h-5/6 md:h-full w-72 md:w-${cardWidth} shadow-xl  transition duration-300 ease-in-out transform hover:scale-105`}
      >
        <figure>
          <img src={img} alt={author} className="object-cover w-full h-full" />
        </figure>
        <div className="card-body h-1/3 flex flex-col gap-4">
          <h2 className="card-title  text-sm md:text-lg">
            {name}
            <div className="badge badge-secondary">{category}</div>
          </h2>
          <div className="flex flex-col justify-center mx-auto  w-30">
            {/* <p className="text-sm">{description}</p> */}
            <button
              style={{ borderRadius: "50px" }}
              className="bg-base-200 px-2 py-1 text-xs md:px-5 md:py-2 md:text-sm border border-white   hover:bg-yellow-500  hover:text-white"
            >
              Download
            </button>
          </div>
          <div className="card-actions justify-end items-end  ml-4">
            <div className="text-xs md:text-sm">~{author}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
