import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { PersistConfig } from "redux-persist/lib/types";
import storage from "redux-persist/lib/storage";

import authReducer, { AuthState } from "./slices/auth";
import todosReducer, { TodosState } from "./slices/todos";

const authPersistConfig: PersistConfig<AuthState> = {
  key: "auth:fwg20",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const todosPersistConfig: PersistConfig<TodosState> = {
  key: "todos:fwg20",
  storage,
};

const persistedTodosReducer = persistReducer(todosPersistConfig, todosReducer);

// const persistConfig: PersistConfig<{ auth: AuthState; todos: TodosState }> = {
//   key: "fwg20",
//   storage,
// };

// const persistedReducer = persistCombineReducers(persistConfig, {
//   auth: authReducer,
//   todos: todosReducer,
// });

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    todos: persistedTodosReducer,
  },
});

// export const store = configureStore({
//   reducer: persistedReducer,
// });

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
