import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Demo/App.jsx';

function Apps() {
  return (
    <>
      <h1>hello world from main.jsx</h1>
    </>
  );
}

let root = document.getElementById('root');
let h1 = document.createElement("h1");
h1.textContent = "h1 Tags";
root.appendChild(h1);

ReactDOM.createRoot(root).render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <br />
    <Apps />
  </>
);
