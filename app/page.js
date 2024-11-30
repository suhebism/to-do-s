"use client";
import React, { useState } from "react";
import AddItem from "../components/AddItem";
import TodoCard from "../components/TodoCard";
import { CirclePlus } from "lucide-react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All"); // Default filter
  const [openTodo, setOpenTodo] = useState(false);

  const newTodo = {
    id: Date.now(), // Use timestamp as unique ID
    text: "Sample Task",
    label: "Work",
    isCompleted: false,
    createdAt: new Date().toLocaleString(),
  };
  
  // Add new todo
  const addTodo = (newTodo) => {
    setTodos([
      ...todos,
      { ...newTodo, id: Date.now() }, // Assign unique ID
    ]);
  };
  

  // Filtered todos based on category
  const filteredTodos =
    filter === "All" ? todos : todos.filter((todo) => todo.label === filter);

  // Close Add Todo Modal
  const close = () => {
    setOpenTodo(false);
  };

  // Open Add Todo Modal
  const openTodoAdd = () => {
    setOpenTodo(true);
  };

  return (
    <div className="max-w-[400px] w-full mx-auto px-4 flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-black text-4xl font-black">Your Notes</h1>
        <div onClick={openTodoAdd}>
          <CirclePlus className="text-black" />
        </div>
      </div>

      {/* Add Item Modal */}
      {openTodo && <AddItem onAddTodo={addTodo} close={close} />}

      {/* Tabs for Categories */}
      <div className="tabs flex gap-2 overflow-hidden overflow-x-scroll scroll-smooth scrollbar-hide">
        {["All", "Personal", "Work", "Fitness", "Other"].map((category) => (
          <div
            key={category}
            className={`tab cursor-pointer transition-all ease-in-out duration-300 ${
              filter === category
                ? "bg-green-500 border-[1px] border-green-500 rounded-lg px-4"
                : "bg-transparent border-[1px] border-white rounded-lg px-4"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </div>
        ))}
      </div>

      {/* Todo Cards */}
      {filteredTodos.length === 0 ? (
        <h1 className="text-black">No Notes Found</h1>
      ) : (
        <TodoCard todos={filteredTodos} setTodos={setTodos} />
      )}
    </div>
  );
};

export default App;
