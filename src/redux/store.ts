import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth";
import todosReducer from "./slices/todos";

const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
