// import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./styles/index.css";
import "./styles/main.css";

import router from "./router";

import { TodosProvider } from "./contexts/todos";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <TodosProvider>
    <RouterProvider router={router} />
  </TodosProvider>
  // </React.StrictMode>
);
