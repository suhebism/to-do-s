"use client";
import React, { useState } from 'react';

const AddItem = ({ onAddTodo, close }) => {
  const [input, setInput] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [label, setLabel] = useState("Personal"); // Default label

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodo = { 
      text: input, 
      isCompleted: false, 
      option: selectedOption, 
      label, // Add the label property
      createdAt: new Date().toLocaleString() // Add created time and date
    };
    
    onAddTodo(newTodo);
    setInput("");
    setSelectedOption("");
    setLabel("Personal"); // Reset label
    close();
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='bg-white rounded-xl shadow-lg p-6 relative max-w-[380px] w-full max-h-[200px] h-[200px]'>
      <div className='text-black absolute top-2 right-5 cursor-pointer' onClick={close} >Close</div>
      <div className="todo-input flex flex-col py-5">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className='text-black border-2 outline-none rounded-xl px-2'
        />
        <select className='text-black' value={selectedOption} onChange={handleDropdownChange}>
        <option value="" disabled>Select a priority</option>
          <option className='text-black' value="High Priority">High Priority</option>
          <option className='text-black' value="Medium Priority">Medium Priority</option>
          <option className='text-black' value="Low Priority">Low Priority</option>
        </select>
        <select className='text-black' value={label} onChange={(e) => setLabel(e.target.value)}>
            <option value="" disabled>#</option>
          <option className='text-black' value="Personal">Personal</option>
          <option className='text-black' value="Work">Work</option>
          <option className='text-black' value="Fitness">Fitness</option>
          <option className='text-black' value="Other">Other</option>
        </select>
        <button className="bg-green-500 text-white py-3 absolute bottom-0 left-0 w-full rounded-xl" onClick={addTodo}>Add</button>
      </div>
      </div>
    </div>
  );
};

export default AddItem;
