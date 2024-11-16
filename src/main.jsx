import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/azultest3">
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
