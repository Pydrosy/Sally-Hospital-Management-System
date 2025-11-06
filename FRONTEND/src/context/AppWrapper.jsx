// src/context/AppWrapper.jsx
import React, { useState } from 'react';
import { Context } from "./AuthContext.jsx";
import App from "../App.jsx";

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
      <App />
    </Context.Provider>
  );
};

export default AppWrapper;
