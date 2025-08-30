import React from "react";
import { useState } from "react";
// there is a concept of Batching in react , whenever there are multiple updates in state react wait until the event , aync callback gets completed then react groups multiple state updates into a single re-render. 
function Card() {
    const [count , setCount] = useState(0);
    function add() { // click on Add button will only increment the value by 1 not 3
        setCount(count+1);  
        setCount(count+1);
        setCount(count+1);
    }
    function add() { // but here it will increase the value by 3 on evrry click
        setCount((prevValue)=> prevValue+1);
        setCount((prevValue)=> prevValue+1);
        setCount((prevValue)=> prevValue+1);
    }
    return (
   <button onClick={add}>Add</button>
    )
}

export default Card;