import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <h1>ICN 2026 Champion</h1>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <>
  <App/>
   <h1>Hello Day 29</h1>
   <MyApp/>
  </>
  </StrictMode>,
)
