import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

function Apps() {
  return (
    <>
      <h1>hello world from main.jsx</h1>
    </>
  );
}

let root = document.getElementById('root');


ReactDOM.createRoot(root).render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <br />
    <Apps />
  </>
);