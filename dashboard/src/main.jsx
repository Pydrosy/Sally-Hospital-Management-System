import ReactDOM from "react-dom/client";
import React from "react";
import AppWrapper from "../context/AppWrapper.jsx"; // import the wrapper


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
