// src/context/AuthContext.jsx
import { createContext } from 'react';

export const Context = createContext({
  isAuthenticated: false,
  user: null,
  setIsAuthenticated: () => {},
  setUser: () => {},
});
