import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
    },
  ],
  update: undefined
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setUpdate: (state, action) => {
        state.update = action.payload; // Set the ID of the todo to update
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === state.update.id
          ? { ...todo, text: action.payload }
          : todo
      );
      state.update = undefined; // Reset after updating
    },
  },
});

export const { addTodo, removeTodo, setUpdate, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
