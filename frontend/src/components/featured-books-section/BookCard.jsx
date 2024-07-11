import React from "react";

export default function BookCard({ name, description, author, category, img }) {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={img} alt={author} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">-{author}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
