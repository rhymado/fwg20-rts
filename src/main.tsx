// import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import "./styles/index.css";
import "./styles/main.css";

import router from "./router";

// import { TodosProvider } from "./contexts/todos";
// import { AuthProvider } from "./contexts/auth";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ReduxProvider store={store}>
    <RouterProvider router={router} />
  </ReduxProvider>
  // </React.StrictMode>
);
