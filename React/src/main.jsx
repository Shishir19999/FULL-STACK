import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



  function Apps(){
    return(
      <>
      <h1>hello world from main jsx</h1>
      </>
    )
  }




ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  <Apps/>
  </>
  )
  
