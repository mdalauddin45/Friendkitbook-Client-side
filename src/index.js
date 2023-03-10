import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthProvider from "./contexts/AuthProvider";
import { Toaster } from "react-hot-toast";
import "react-day-picker/dist/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <Toaster />
    <App />
  </AuthProvider>
);
