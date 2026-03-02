import { registerRequest, loginRequest } from "../api/auth.js";
import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signup = async (user) => {
    await registerRequest(user)
      .then((res) => {
        setUser(res.data);
        setIsAuthenticated(true);
      })
      .catch((err) => {
        setErrors(err.response.data.message);
      });
  };

  const signin = async (user) => {
    await loginRequest(user)
      .then((res) => {
        setUser(res.data);
        setIsAuthenticated(true);
      })
      .catch((err) => {
        setErrors(err.response.data.message);
      });
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        user,
        isAuthenticated,
        errors
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
