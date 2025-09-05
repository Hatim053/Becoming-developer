import React, { useContext, useState } from 'react'
import TodoContext from '../Contexts/TodoContext';


function TodoForm({setTask}) {

const {addTask} = useContext(TodoContext);
  return (
      <form   className="flex"  onSubmit={(e) => {
            e.preventDefault();
            if(document.querySelector('input').value.trim() != '') {
            addTask({id : Date.now() , text : document.querySelector('input').value  , completed : false})
            }
          }}>
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
               defaultValue={''}
          />
          
          <button 
          type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
          >
              Add
          </button>
      </form>
  );
}

export default TodoForm;