// src/context/AppWrapper.jsx
import React, { useState } from "react";
import { Context } from "./AuthContext.jsx";

const AppWrapper = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [admin, setAdmin] = useState({});

  return (
    <Context.Provider
      value={{ isAuthenticated, setIsAuthenticated, admin, setAdmin }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppWrapper;
