import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Class from "./pages/Class.tsx";
import Function from "./pages/Function.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Class />
    <Function />
  </React.StrictMode>
);
