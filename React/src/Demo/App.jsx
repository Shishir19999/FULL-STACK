import React from "react"
import Header from "./Header.jsx"
import {Footer} from "./Footer.jsx"

function ITN(){
  return(
    <>
    <h1>ITN</h1>
    </>
  )
}


function App() {

  return (
    <>
    <Header/>
      <h1>hello world from App.jsx</h1>
    <ITN/>
    <Footer/>
    </>
  )
}

export default App
