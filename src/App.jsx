import './App.css'
import AddTask from "./components/AddTask"
import TodoList from "./components/TodoList"
import { FaCalendarAlt } from 'react-icons/fa';


function App() {

  return (
    <>
      <div className='bg-white w-1/2 mx-auto rounded-lg mb-8 mt-8'>
      <div className='mt-3 pt-3'>
       <h1 className="text-black font-bold text-2xl mt-12">To-do List<FaCalendarAlt className="inline-block text-black-500 ml-2 mb-1" /></h1>
       </div>
      <AddTask />
      <TodoList />
      </div>
       </>
  )
}

export default App
