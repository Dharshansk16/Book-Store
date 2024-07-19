import React from "react";

export default function Button({ value }) {
  return (
    <div>
      <button className="px-6 py-2 md:py-2.5 text-lg rounded-lg bg-gray-400 hover:bg-yellow-500 dark:bg-slate-600 text-white dark:text-gray-400 dark:hover:bg-yellow-500 dark:hover:text-white">
        {value}
      </button>
    </div>
  );
}
