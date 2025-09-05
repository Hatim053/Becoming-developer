import React, { useEffect, useState } from "react";
import TodoContext from "./TodoContext";

const TodoContextProvider = ({children}) => {
  const [todoArr , setTodoArr] = useState(JSON.parse(localStorage.getItem('todoArr')) || []);
  // function to add tasks
  const addTask = (task) => {
    setTodoArr([task , ...todoArr]);
  }
  // function to remove tasks
  const deleteTask = (id) => {
   setTodoArr(todoArr.filter((task) => task.id != id))
  }

  // function to mark task as completed 
  const isCompleted = (id) => {
    setTodoArr(todoArr.map((task) => {
      if(task.id == id) {
        task.completed = true;
      }
      return task;
    }))
  }

  // function to edit task 
  const editTask = (text , id) => {
  setTodoArr(todoArr.map((task) => {
    if(task.id == id) {
      task.text = text;
    }
    return task;
  }))
  }
   useEffect(() => {
    localStorage.setItem('todoArr' , JSON.stringify(todoArr));
   } , [todoArr])

  return (
    <TodoContext.Provider value = {{todoArr , setTodoArr , addTask , deleteTask , isCompleted , editTask}} >
      {children}
      </ TodoContext.Provider>
  )
}

export default TodoContextProvider;