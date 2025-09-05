import { useContext, useEffect, useState } from 'react'
import TodoContext from './Contexts/TodoContext';
import TodoContextProvider from './Contexts/TodoContextProvider';
import TodoForm from './Components/TodoForm';
import TodoCard from './Components/TodoCard';

function App() {

const {todoArr , addTask , setTodoArr , editTask , deleteTask , isCompleted} = useContext(TodoContext);

  return ( 
      
          <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                       <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                     {
                        todoArr.map((eachTask) => {
                        return (<div key={eachTask.id}> <TodoCard task={eachTask}/> </div>)
                     })
                    }
                    </div>
                </div>
            </div>

  )
}

export default App
