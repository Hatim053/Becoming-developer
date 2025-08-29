import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <Card carName = 'defender' price = '1000000' />
    <Card carName = 'BMW M4' price = '200000000' />
    <Card/>
    </>
  )
}

export default App
