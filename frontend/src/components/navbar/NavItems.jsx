import React from "react";
import { NavLink } from "react-router-dom";

export default function NavItems() {
  return (
    <>
      <NavLink to="/">
        <li>
          <p>Home</p>
        </li>
      </NavLink>
      <NavLink to="/books">
        <li>
          <p>Book</p>
        </li>
      </NavLink>
      <NavLink to="/contact">
        <li>
          <a>Contact</a>
        </li>
      </NavLink>
      <NavLink to="/about">
        <li>
          <a>About</a>
        </li>
      </NavLink>
    </>
  );
}
