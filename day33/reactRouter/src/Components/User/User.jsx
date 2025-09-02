import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
    const {Id} = useParams();
    return (
    <div className="relative flex gap-10 items-center justify-center min-h-[100px] bg-white sm:items-center sm:pt-0">
        <h1>User : {Id}</h1>
        <h1>Amchi Mumbai</h1>
    </div>
    ) 
}