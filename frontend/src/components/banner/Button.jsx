import React from "react";

export default function Button({ value }) {
  return (
    <div>
      <button className="px-6 py-2 md:py-2.5 font-semibold text-lg rounded-lg bg-slate-600 hover:bg-yellow-500 hover:text-white">
        {value}
      </button>
    </div>
  );
}
