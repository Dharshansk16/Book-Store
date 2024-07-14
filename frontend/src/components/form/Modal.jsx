import React from "react";
import Form from "./Form";
import { useState } from "react";

export default function Modal({ id }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevVal) => ({
      prevVal,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (id !== "login_modal" && user.password !== user.confirmPassword) {
      setError("Passwords Don't Match!");
      return;
    }
  };
  return (
    <div>
      <dialog id={id} className="modal modal-middle">
        <div className="modal-box dark:bg-base-200 bg-gray-200 text-gray-800 dark:text-gray-200">
          <button
            className="btn btn-sm btn-circle btn-ghost  absolute right-2 top-2"
            onClick={() => document.getElementById(id).close()}
          >
            ✕
          </button>

          {id === "login_modal" ? (
            <form method="dialog" onSubmit={handleSubmit}>
              <Form
                username={user.username}
                password={user.password}
                callHandleChange={handleChange}
                formName="Login"
                currentModalId={id}
                OtherModalId="register_modal"
              />
            </form>
          ) : (
            <form method="dialog" onSubmit={handleSubmit}>
              <Form
                username={user.username}
                password={user.password}
                confirmPassword={user.confirmPassword}
                callHandleChange={handleChange}
                formName="Register"
                currentModalId={id}
                OtherModalId="login_modal"
                errorText={error}
              />
            </form>
          )}
        </div>
      </dialog>
    </div>
  );
}
