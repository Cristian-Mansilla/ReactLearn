import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Termostato from './Termostato';
import Superficie from './SupTriangulo';
import Estados from './Estados';
import Dolar from './Dolar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Termostato/>
    <Dolar />
    <Superficie />
    <Estados />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
