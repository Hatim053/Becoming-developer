import { useState } from 'react'
import './App.css'
import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'
function App() {


  return (
    <>
    <h1>Amchi Mumbai</h1>
    <AddTodo/>
   <Todos/>
    </>
  )
}

export default App
