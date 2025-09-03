import { useState } from 'react'
import './App.css'
import ThemeContextProvider from './Contexts/ThemeContextProvider'
import Card from './Components/Card'
import ThemeButton from './Components/ThemeButton'

function App() {
  

  return (
    <ThemeContextProvider>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
             <ThemeButton/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                    <Card/>
              </div>
          </div>
      </div>
   </ThemeContextProvider>
  )
}

export default App