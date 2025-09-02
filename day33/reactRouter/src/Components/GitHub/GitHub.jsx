import React, { useEffect, useState } from "react";


export default function GitHub() {
    const [data , setData] = useState({});
    useEffect(() => {
    fetch('https://api.github.com/users/Hatim053')
    .then((response) => response.json())
    .then((data) => {
        setData(data);
        console.log(data.avatar_url);
    })
    } , [])
    return (
        <>
         <div className="relative flex gap-10 items-center  justify-center min-h-[300px] bg-white sm:items-center sm:pt-0">
            <img src= {data.avatar_url} alt="GitHub Profile" className="h-[200px] w-[200px]" />
            <h1>Followers : {data.followers}</h1>
         </div>
        </>
    )
}