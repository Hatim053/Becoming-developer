import React from "react";
import { useState } from "react";

function Color() {
    const [color , setColor] = useState('white');
    
    function change(value) {
        function inner() {
        setColor(value)
        document.querySelector('.container').style.backgroundColor = `${color}`;
        }
        return inner;
    }
    return (
     <>
     <div className="container" style={{width:'100vw', height : '100vh'}}>
     <div className="buttons">
        <button onClick={change('red')}>Red</button>
        <button onClick={change('blue')}>Blue</button>
        <button onClick={change('green')}>Green</button>
     </div>
     </div>
     </>
    )
}




export default Color;