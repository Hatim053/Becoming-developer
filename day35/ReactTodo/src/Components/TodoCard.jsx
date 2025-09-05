import React, { useContext, useState } from 'react';
import TodoContext from '../Contexts/TodoContext';
import TodoContextProvider from '../Contexts/TodoContextProvider';
function TodoItem({task}) {
    
const [isTodoEditable , setIsTodoEditable] = useState(false);
const {isCompleted , deleteTask , editTask} = useContext(TodoContext);
  
  return (
      <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
            task.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
            checked = {task.completed}
             onChange={(e) => {
                if(! task.completed) {
               isCompleted(task.id)
                }
             }}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${task.completed ? "line-through" : ""}`}
            defaultValue={task.text}
            onChange={(e) => {
             editTask(e.target.value , task.id);
            }}
            readOnly = {!isTodoEditable}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
            disabled = {task.completed}
            onClick={(e) => {
                if(e.target.innerHTML == '📁') {
                    e.target.innerText = '✏️'
                    setIsTodoEditable(false)
                } else {
                e.target.innerText = '📁'
                setIsTodoEditable(true)
                }
                
            }}
          >
              ✏️
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
             onClick={() => {
                deleteTask(task.id);
             }}
          >
              ❌
          </button>
      </div>
  );
}

export default TodoItem;