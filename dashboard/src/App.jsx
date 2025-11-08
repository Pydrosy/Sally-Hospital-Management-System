import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./components/Login.jsx";
import AddNewDoctor from "./components/AddNewDoctor.jsx";
import Messages from "./components/Messages.jsx";
import Doctors from "./components/Doctors";
import AddNewAdmin from "./components/AddNewAdmin.jsx";
import Sidebar from "./components/Sidebar.jsx";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "./context/AuthContext.jsx";
import "./App.css";

const App = () => {
  const { setIsAuthenticated, setAdmin } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(

          "http://localhost:4000/api/v1/user/admin/me",
          { withCredentials: true }
        );
        setIsAuthenticated(true);
        setAdmin(response.data.user);
      } catch {
        setIsAuthenticated(false);
        setAdmin({});
      }
    };

    fetchUser();
  }, [setIsAuthenticated, setAdmin]);

  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctor/addnew" element={<AddNewDoctor />} />
        <Route path="/admin/addnew" element={<AddNewAdmin />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/doctors" element={<Doctors />} />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
};

export default App; 
