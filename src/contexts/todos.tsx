import { createContext, useCallback, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

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
  const [todos, setTodos] = useLocalStorage<todo[]>([], "todos");
  // const [todos, setTodos] = useState<todo[]>(() => {
  //   // cek nilai todos di local storage
  //   const todosLocal = localStorage.getItem("todos");
  //   // console.log(todosLocal);
  //   if (!todosLocal) return []; // jika tidak ada berikan nilai default
  //   return JSON.parse(todosLocal);
  // });
  // useEffect(() => {
  //   // jika todos berubah, perbaharui nilai todos di localstorage
  //   const newTodosLocal = JSON.stringify(todos);
  //   localStorage.setItem("todos", newTodosLocal);
  // }, [todos]);
  const addTodo = useCallback(({ id, todo }: todo) => {
    if (!id || !todo) return;
    const newTodo = { id, todo };
    setTodos((todos) => [...todos, newTodo]);
  }, []);
  const editTodo = useCallback(({ id, todo }: todo) => {
    const editedTodos = todos.map((item) => {
      if (item.id === id) return { ...item, todo };
      return item;
    });
    setTodos(editedTodos);
  }, []);
  const deleteTodo = useCallback((id: string) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodo);
  }, []);
  return <todosContext.Provider value={{ todos, addTodo, editTodo, deleteTodo }}>{children}</todosContext.Provider>;
}
