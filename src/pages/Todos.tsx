import { useState } from "react";
import { useStoreDispatch, useStoreSelector } from "../redux/hooks";
import { addTodo, deleteTodo, editTodo } from "../redux/slices/todos";
// import { useTodos } from "../contexts/todos";
// import { useAuth } from "../contexts/auth";
// import { Navigate } from "react-router-dom";

function Todo({ todo, onDelete, onEdit }: { todo: string; onDelete: () => void; onEdit: (todo: string) => void }) {
  const [inputActive, setInputActive] = useState(false);
  const [todoVal, setTodoVal] = useState(todo);
  return (
    <li className="p-2 my-2 border-2 border-black border-solid flex w-full bg-stone-500 text-white gap-2">
      {inputActive ? (
        <>
          <input
            className="p-2 text-xl text-black"
            type="text"
            value={todoVal}
            onChange={(e) => setTodoVal(e.target.value)}
          />
          <button
            className="p-2 border-2 border-white border-solid select-none cursor-pointer"
            onClick={() => {
              onEdit(todoVal);
              setInputActive(false);
            }}
          >
            Done
          </button>
        </>
      ) : (
        <p className="p-2 text-xl text-white">{todo}</p>
      )}
      <button
        className="p-2 border-2 border-white border-solid select-none cursor-pointer ml-auto"
        onClick={() => setInputActive(true)}
      >
        Edit
      </button>
      <button
        className="p-2 border-2 border-white border-solid select-none cursor-pointer bg-red-500"
        onClick={onDelete}
      >
        Delete
      </button>
    </li>
  );
}

function Todos() {
  // const { token } = useAuth();
  // const { todos, deleteTodo, editTodo, addTodo } = useTodos();
  const { todos } = useStoreSelector((state) => state.todos);
  const dispatch = useStoreDispatch();
  const [form, setForm] = useState({ id: "", todo: "" });
  const [error, setError] = useState(false);
  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reg = /^\d+$/;
    if (e.target.name === "id") {
      if (reg.test(e.target.value) || !e.target.value) setError(false);
      if (!reg.test(e.target.value) && e.target.value) setError(true);
    }
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  // if (!token) return <Navigate to={"/login"} replace />;

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (error) return;
          dispatch(addTodo({ id: form.id, todo: form.todo }));
          setForm({ id: "", todo: "" });
        }}
      >
        <label htmlFor="id" className="mr-2">
          id
        </label>
        <input
          className={`border-2 border-solid border-black ${error && "border-red-500"} outline-none p-2`}
          type="text"
          id="id"
          name="id"
          value={form.id}
          onChange={onFormChange}
        />
        <label htmlFor="todo" className="mr-2">
          todo
        </label>
        <input
          className="border-2 border-solid border-black outline-none p-2"
          type="text"
          id="todo"
          name="todo"
          value={form.todo}
          onChange={onFormChange}
        />
        <button type="submit" className="p-2 border-2 border-black border-solid select-none cursor-pointer">
          Add Todo
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo
            todo={todo.todo}
            key={todo.id}
            onDelete={() => dispatch(deleteTodo({ id: todo.id }))}
            onEdit={(text) => dispatch(editTodo({ id: todo.id, todo: text }))}
          />
        ))}
      </ul>
    </>
  );
}

export default Todos;
