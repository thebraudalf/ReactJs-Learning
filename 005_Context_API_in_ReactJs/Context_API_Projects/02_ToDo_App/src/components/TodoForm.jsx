import { useState } from "react";
import { useTodo } from "../context/index.js";

function TodoForm() {
  const [todo, setTodos] = useState("");
  const { addTodo } = useTodo();

  const add = (event) => {
    event.preventDefault();

    if (!todo) return;

    addTodo({ todo: todo, completed: false });
    setTodos("");
  };

  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodos(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
