import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
function App() {

  return (
    <>
    <Header/>
   <Outlet/>
   <Footer/>
    </>
  )
}

export default App
