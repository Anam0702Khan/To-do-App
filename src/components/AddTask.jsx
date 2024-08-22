import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTask } from '../slice/TodoSlice';
import { FaPlus } from 'react-icons/fa';


const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ title, description, completed: false }));
    setTitle('');
    setDescription('');
  };

  return (
    <form className="flex flex-col gap-4 mb-6" onSubmit={handleSubmit}>
      <input
        className=" m-3 p-3 rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="m-3 p-3 rounded-lg bg-gray-100  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button 
        className=" d-flex m-auto py-3 px-9 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600"
        type="submit"
      >
       Add Task
      </button>
    </form>
  );
};

export default AddTask;
