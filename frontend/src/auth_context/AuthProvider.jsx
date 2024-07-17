import React, { createContext, useContext } from "react";
import { useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const currAuthUser = localStorage.getItem("USER");
  const [authUser, setAuthUser] = useState(
    currAuthUser ? JSON.parse(currAuthUser) : null
  );
  const [isAuthorised, setIsAuthorised] = useState(false);

  useEffect(() => {
    if (authUser !== null) {
      setIsAuthorised(true);
    } else {
      setIsAuthorised(false);
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, isAuthorised }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
