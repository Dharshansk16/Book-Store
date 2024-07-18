import React, { useEffect } from "react";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./auth_context/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
      localStorage.removeItem("USER");
      navigate("/", { replace: true });
      window.location.reload();
    }, [navigate]);
    return null;
  };
  return (
    <div
      className="dark:bg-base-100 dark:text-gray-200 bg-gray-100
   text-gray-700"
    >
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/books"
              element={
                <ProtectedRoute>
                  <Books />
                </ProtectedRoute>
              }
            />
            <Route path="/user/logout" element={<Logout />} />
          </Routes>
        </AuthProvider>
      </Router>

      <Toaster />
    </div>
  );
}
