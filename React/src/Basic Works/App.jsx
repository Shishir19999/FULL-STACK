import React from "react"
import Header from "./Header.jsx"
import {Footer} from "./Footer.jsx"
import Student from "./Student.jsx"
import "./CSS/style.css"

function ITN(){
  return(
    <>
    <h1>ITN</h1>
    </>
  )
}


function App() {
  let ed=new Date().getFullYear();
  let logoName="IWTN";
  let num=[23,23,13,12,34];
  const data={
    x:10,
    y:5
  }
  let x=10
  const appName="Reactjs";
  const myStyle={
    color:"red",
    backgroundColor:"black"
  }
  return (
    <div className="container">
    <Header logo={logoName} est_date={ed}/>
    <Student/>
      <h1 style={myStyle}>hello world {data.y} from {x} App.jsx</h1>
      <h1 style={{color:"red"}}>test css {appName}</h1>
    <ITN/>
    <h1>{num}</h1>
    <Footer/>
    </div>
  )
}

export default App
