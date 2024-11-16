import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

// Rendering the application
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {" "}
      {/* Use the base path if needed */}
      <Routes>
        <Route path="*" element={<App />} /> {/* Catch-all route */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
