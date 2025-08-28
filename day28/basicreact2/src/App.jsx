import { useState } from 'react'


function App() {
let[counter , setCounter] = useState(10);
function add() {
if(counter < 20) {
counter = counter + 1;
setCounter(counter) 
}
}
function remove() {
if(counter > 10) {
counter = counter -1;
setCounter(counter);
}
}
  return (
    <>
    <h1>Counter Value : {counter}</h1>
    <button onClick={add} id='add'>Add Value</button>
    <button onClick={remove} id='remove'>Remove Value</button>
    <h1>Counter Value : {counter}</h1>
  </>
  )
}

export default App
