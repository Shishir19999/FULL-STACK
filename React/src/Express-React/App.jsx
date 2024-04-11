import React from 'react';
import { useState,useEffect } from 'react';

function App() {
const [news,setNews]=useState([]);

useEffect(()=>{
    fetch("http://localhost:3000/news")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>console.log(err))
},[])
useEffect(()=>{
    fetch("http://localhost:3000/student")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>console.log(err))
},[])

  return (
    <div>
    <h1>Hello News List</h1>
    </div>
  )
}

export default App
