import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type todo = {
  id: string;
  todo: string;
};

interface ITodosState {
  todos: todo[];
}

const initialState = {
  todos: [],
} satisfies ITodosState as ITodosState;

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<todo>) => {
      state.todos.push(payload);
    },
    editTodo: (state, { payload }: PayloadAction<todo>) => {
      state.todos = state.todos.map((item) => {
        if (item.id === payload.id) return { ...item, todo: payload.todo };
        return item;
      });
    },
    deleteTodo: (state, { payload }: PayloadAction<{ id: string }>) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload.id);
    },
  },
});

export const { addTodo, editTodo, deleteTodo } = todosSlice.actions;
export type TodosState = ReturnType<typeof todosSlice.reducer>;
export default todosSlice.reducer;
