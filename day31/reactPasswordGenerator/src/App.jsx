import { useState , useEffect , useRef} from 'react'
import './App.css'

function App() {
  const [length , setLength] = useState(8);
  const [numbersAllowed , setNumbersAllowed] = useState(false);
  const [specialCharactersAllowed , setSpecialCharactersAllowed] = useState(false);
  const [password , setPassword] = useState('UInirbugnrk');
   
  // function to generate random password
  const generatePassword = () => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let pass = '';
    if(numbersAllowed) str += '0123456789';
    if(specialCharactersAllowed) str += '!@#$%^&*(){}[]~';
    for(let i = 0; i < length; i++) {
    let idx = Math.floor((Math.random() * str.length) + 1);
    pass += str[idx];
    } 
    setPassword(pass);
  }

// attaching generatePassword function callbacks if following value's change
useEffect(() => {
  generatePassword();
} , [length , numbersAllowed , specialCharactersAllowed])

const passwordRef = useRef(null);
// function to copy password to clilpboard
const copyToClipboard = function() {
  passwordRef.current.select();
  window.navigator.clipboard.writeText(password);
}

  return (
    <>
    <h2>Password Generator</h2>
    <div className="container">
      <div className="password">
        <input type="text" value={password} ref={passwordRef} />
        <button onClick={copyToClipboard}>Copy</button>
      </div>
      <div className="options">
         <label htmlFor="">Length : {length}
          <input onChange={(e)=>{
            setLength(e.target.value);
          }} type="range" min={8} max={30}/>
         </label>
        <label htmlFor="">
           <input onClick={()=> {
            setNumbersAllowed((prev) => !prev);
           }} type="checkbox" value={false} />Numbers
        </label>
         <label htmlFor="">
           <input onClick={()=> {
            setSpecialCharactersAllowed((prev) => !prev);
           }} type="checkbox"  value={false}/>Special characters
         </label>
      </div>
    </div>
    </>
  )
}

export default App
