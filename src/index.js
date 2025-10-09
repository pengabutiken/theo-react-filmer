import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Apiverision from "./Apiverision";
import "./index.css";
import Databaseverision from "./Databaseverision"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Api" element={<Apiverision />} />
        <Route path="/DB" element={<Databaseverision/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);