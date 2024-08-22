
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, toggleTaskCompletion } from '../slice/TodoSlice';

const TodoList = () => {
  const tasks = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className='mb-6'>
      <ul className="bg-white rounded-lg p-5 shadow-lg w-96 mx-auto my-8">
        {tasks.map((task, index) => (
          <li 
            key={index} 
            className={`flex justify-between items-center mb-4 p-3 rounded-lg ${task.completed ? 'bg-gray-200' : 'bg-gray-100'} transition-all duration-300`}
          >
            <div className="flex flex-col">
              <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-orange-500' : ''}`}>
                {task.title}
              </h3>
              <p className="text-sm text-gray-600">{task.description}</p>
            </div>
            <div className="flex space-x-2">
              <button
                className={`py-2 px-4 rounded-lg font-semibold text-white ${task.completed ? 'bg-blue-500 hover:bg-blue-600' : 'bg-orange-500 hover:bg-orange-600'}`}
                onClick={() => dispatch(toggleTaskCompletion(index))}
              >
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button 
                className="py-2 px-4 rounded-lg font-semibold text-white bg-red-500 hover:bg-red-600"
                onClick={() => dispatch(deleteTask(index))}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

