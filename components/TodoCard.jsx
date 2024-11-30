"use client";
import React from "react";
import { Trash2 } from "lucide-react";

const TodoCard = ({ todos, setTodos }) => {
  // Toggle complete status
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  // Delete a todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {todos.map((todo) => (
        <div
          key={todo.id} // Ensure this is unique for every todo
          className="relative todo-item flex flex-col items-start bg-green-500 min-w-52 max-w-60 min-h-52 max-h-60 p-3 rounded-2xl"
        >
          {/* Todo Text */}
          <span
            onClick={() => toggleComplete(todo.id)}
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "none",
              cursor: "pointer",
            }}
            className="text-3xl font-bold"
          >
            {todo.text}
          </span>
          {/* Additional Info */}
          <span>{todo.option}</span>
          <span>Label: {todo.label}</span>
          <p className="text-xs">Created At: {todo.createdAt}</p>
          {/* Delete Button */}
          <button
            className="absolute bottom-2 left-2"
            onClick={() => deleteTodo(todo.id)}
          >
            <Trash2 />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoCard;
