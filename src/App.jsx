import './App.css'
import AddTask from "./components/AddTask"
import TodoList from "./components/TodoList"
import { FaCalendarAlt } from 'react-icons/fa';


function App() {

  return (
    <>
      <div className='bg-white w-1/2 mx-auto rounded-lg mb-8'>
       <h1 className="text-black font-bold text-xl mt-12">To-do List<FaCalendarAlt className="inline-block text-black-500 ml-2" /></h1>
      <AddTask />
      <TodoList />
      </div>
       </>
  )
}

export default App
