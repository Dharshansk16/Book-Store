import React from "react";
import { useAuth } from "../auth_context/AuthProvider";
import { Link } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuthorised } = useAuth();
  if (isAuthorised === null) {
    return (
      <div>
        <h1>loading</h1>
      </div>
    );
  }
  return isAuthorised ? (
    children
  ) : (
    <div>
      <div className="w-full bg-red-500 text-white py-2">
        <marquee className="font-bold">
          Please login to access this page
        </marquee>
      </div>
      <Link to="/">
        <p>go back</p>
      </Link>
    </div>
  );
}
