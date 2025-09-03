import React, { useContext, useState } from "react";
import UserContext from "../Contexts/userContext";


function LogIn() {
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const {setUser} = useContext(UserContext);
    return (
        <>
        <input onChange={(e) => {
            setUsername(e.target.value);
        }}  type="text"  placeholder="Enter UserName" />
        <input type="text" 
        onChange={(e) => {
            setPassword(e.target.value);
        }} placeholder="Enter Password"  />
        <button onClick={(e) => {
            e.preventDefault();
            setUser({username , password})
        }}>Submit</button>
        </>
    )
}

export default LogIn;