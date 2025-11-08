import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../context/AuthContext.jsx"; // ✅ Correct import
import { Link, Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/user/patient/register",
        { firstName, lastName, email, phone, nic, dob, gender, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(res.data.message);
      setIsAuthenticated(true);
      navigateTo("/");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setNic("");
      setDob("");
      setGender("");
      setPassword("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed. Try again.");
    }
  };

  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="container form-component register-form">
      <h2>Sign Up</h2>
      <p>Create your Sally Medical Health account.</p>
      <p>
        Register to book appointments, access medical records, and receive
        important health updates securely.
      </p>

      <form onSubmit={handleRegistration}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="NIC"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
            required
          />
          <input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>

        <div>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "flex-end",
            marginTop: "10px",
          }}
        >
          <p style={{ marginBottom: 0 }}>Already registered?</p>
          <Link
            to="/signin"
            style={{ textDecoration: "none", color: "#271776ca", fontWeight: "bold" }}
          >
            Login Now
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <button type="submit" className="purple-btn">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
