import { useState } from 'react'
import './App.css'
import LogIn from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Contexts/UserContextProvider'
function App() {
  

  return (
    <UserContextProvider>
   <LogIn/>
   <Profile/>
    </UserContextProvider>
  )
}

export default App
