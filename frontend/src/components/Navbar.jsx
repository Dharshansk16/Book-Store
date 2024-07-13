import React from "react";
import NavItems from "./navbar/NavItems";
import Search from "./navbar/Search";
import DarKModeSwitch from "./navbar/DarkModeSwitch";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [onScroll, setOnScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setOnScroll(true);
      } else {
        setOnScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div
        className={`navbar bg-base-100  md:max-w-screen-2xl max-w-md container md:mx-auto md:px-10 px-1 fixed top-0 left-0 right-0 z-40 bg-transparent transition duration-300 ${
          onScroll
            ? "dark:backdrop-brightness-50 dark:backdrop-contrast-100 backdrop-contrast-50 backdrop-brightness-100"
            : ""
        } shadow-lg `}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavItems />
              <li>
                <div>
                  <Search />
                </div>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-bold cursor-pointer">
            bookStore
          </a>
        </div>
        <div className="navbar-center hidden lg:flex mx-1 navbar-end">
          <ul className="menu menu-horizontal">
            <NavItems />
          </ul>
          <div className="mx-1">
            <Search />
          </div>
          <div>
            <DarKModeSwitch />
          </div>
          <div className="ml-1">
            <a className="bg-base-200 text-white px-4 py-2 rounded-lg hover:bg-slate-400">
              Button
            </a>
          </div>
        </div>
      </div>
      <div className="p-10"></div>
    </div>
  );
}
