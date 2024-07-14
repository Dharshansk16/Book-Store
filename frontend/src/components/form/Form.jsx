import React from "react";
import TextYellow from "../../styles/TextYellow";
import { Link } from "react-router-dom";

export default function Form({
  username,
  password,
  confirmPassword,
  callHandleChange,
  formName,
  errorText,
  currentModalId,
  OtherModalId,
}) {
  const handleModalSwitch = () => {
    document.getElementById(currentModalId).close();
    document.getElementById(OtherModalId).showModal();
  };

  return (
    <div className="md:mt-2 mt-1">
      <h1 className="text-2xl font-bold mb-4">
        <TextYellow text={formName} />
      </h1>

      <div className="md:mx-2 mx-1">
        <div className="md:mb-4 mb-2">
          <label className="font-bold block text-gray-300">Username</label>
          <input
            name="username"
            type="text"
            value={username}
            onChange={callHandleChange}
            placeholder="username"
            className="bg-stone-400 font-bold text-md text-stone-700 w-full p-2 placeholder:text-gray-500 placeholder:font-normal border border-gray-300 rounded-lg mt-1 transition transform hover:scale-105 duration-300 ease-in-out"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold text-gray-300">Password</label>
          <input
            type="password"
            name="password"
            placeholder="********"
            value={password}
            onChange={callHandleChange}
            className="bg-stone-400  font-bold text-md text-stone-700 w-full p-2 placeholder:text-gray-500 border border-gray-300 rounded-lg mt-1 transition transform hover:scale-105 duration-300 ease-in-out"
            required
          />
        </div>
        {formName === "Register" && (
          <div className="mb-4">
            <label className="block font-bold text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="********"
              value={confirmPassword}
              onChange={callHandleChange}
              className="bg-stone-400  font-bold text-md text-stone-700 w-full p-2 placeholder:text-gray-500 border border-gray-300 rounded-lg mt-1 transition transform hover:scale-105 duration-300 ease-in-out"
              required
            />
          </div>
        )}

        <div className="md:mb-6 mb-4 mt-8">
          <button
            type="submit"
            className="font-bold text-md  outline-light rounded-lg bg-gradient-to-r from-amber-500 via-orange-300 to-amber-400 ... text-white p-2 w-full transition transform hover:scale-105 duration-300 ease-in-out"
          >
            {formName}
          </button>
          {errorText && <p className="text-sm text-error mt-2">{errorText}</p>}
        </div>
        {formName === "Login" ? (
          <div className="w-full flex justify-around">
            <p className="font-bold badge rounded-lg badge-lg bg-slate-500 text-sm  text-gray-200 hover:text-amber-300">
              <p onClick={handleModalSwitch} className="mx-1">
                Click here to register
              </p>
              {/* closes current modal, opens register modal */}
            </p>
          </div>
        ) : (
          <div className="w-full flex justify-around">
            <p className="font-bold badge rounded-lg badge-lg bg-slate-500 text-sm  text-gray-200 hover:text-amber-300">
              <p onClick={handleModalSwitch} className="mx-1">
                Already Registered ?
              </p>
              {/* closes the current modal, open login modal */}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
