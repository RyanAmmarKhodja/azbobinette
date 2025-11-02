import { useContext, createContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import api from "./api";

const AuthContext = createContext();

// AuthProvider will pass down Auth data (user, token)
// and Auth functions (login, logout) to children.
// (user, token) saved in localStorage, and then in states
// so that browser won't forget the credentials data after refresh.

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();


  // useEffect will run every refresh to "remember" token.
  useEffect(() => {
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, [token]);


  // LOGIN
  const login = async (email, password) => {
    try {
      const response = await api.post("/login", { email, password });
      const token = response.data.token;

      setToken(token);
      setUser(response.data.user);

      localStorage.setItem("token", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      navigate("/dashboard");
      return response.data;
    } catch (error) {
      throw error;
    }
  };


  // LOGOUT
  const logout = async () => {
    try {
      await api.post("/logout");
      localStorage.removeItem("token");

      delete api.defaults.headers.common["Authorization"]; // remove token from headers
      setUser(null);
      setToken("");

      navigate("/login");
    } catch (error) {
      throw error;
    }
  };

  return (
    // Provide user, token, login and logout to children
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
