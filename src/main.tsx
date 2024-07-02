// import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./styles/index.css";
import "./styles/main.css";

import router from "./router";

// import { TodosProvider } from "./contexts/todos";
// import { AuthProvider } from "./contexts/auth";
import { store, persistedStore } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ReduxProvider store={store}>
    <PersistGate persistor={persistedStore} loading={null}>
      <RouterProvider router={router} />
    </PersistGate>
  </ReduxProvider>
  // </React.StrictMode>
);
