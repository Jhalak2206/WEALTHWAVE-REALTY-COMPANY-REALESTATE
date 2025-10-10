import React from 'react';
import ReactDOM from 'react-dom/client';
// Check the path here: should be correct based on your successful compilation
import './styles/Global.css'; 
import App from './App.js'; // Ensure the .js extension is correct
import reportWebVitals from './reportWebVitals';

// 🎯 CRITICAL LINE: Finds the 'root' element from public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renders the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();