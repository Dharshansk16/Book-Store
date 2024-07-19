import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth_context/AuthProvider";

export default function NavItems() {
  const { isAuthorised } = useAuth();
  return (
    <>
      <NavLink to="/">
        <li>
          <p>Home</p>
        </li>
      </NavLink>
      {isAuthorised ? (
        <NavLink to="/books">
          <li>
            <p>Book</p>
          </li>
        </NavLink>
      ) : (
        <li>
          <p
            onClick={() => {
              document.getElementById("login_modal").showModal();
            }}
          >
            Book
          </p>
        </li>
      )}
      <NavLink to="/contact">
        <li>
          <p>Contact</p>
        </li>
      </NavLink>
      <NavLink to="/about">
        <li>
          <p>About</p>
        </li>
      </NavLink>
    </>
  );
}
