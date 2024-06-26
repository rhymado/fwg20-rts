import { createContext, useContext, useState } from "react";

type todo = {
  id: string;
  todo: string;
};

type todosType = {
  todos: todo[];
  addTodo: (todo: todo) => void;
  editTodo: (todo: todo) => void;
  deleteTodo: (id: string) => void;
};

const todosContext = createContext<todosType>({ todos: [], addTodo() {}, editTodo() {}, deleteTodo() {} });

export function useTodos() {
  return useContext<todosType>(todosContext);
}

export function TodosProvider({ children }: { children: JSX.Element }) {
  const [todos, setTodos] = useState<todo[]>([]);
  const addTodo = ({ id, todo }: todo) => {
    if (!id || !todo) return;
    const newTodo = { id, todo };
    setTodos((todos) => [...todos, newTodo]);
  };
  const editTodo = ({ id, todo }: todo) => {
    const editedTodos = todos.map((item) => {
      if (item.id === id) return { ...item, todo };
      return item;
    });
    setTodos(editedTodos);
  };
  const deleteTodo = (id: string) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodo);
  };
  return <todosContext.Provider value={{ todos, addTodo, editTodo, deleteTodo }}>{children}</todosContext.Provider>;
}
