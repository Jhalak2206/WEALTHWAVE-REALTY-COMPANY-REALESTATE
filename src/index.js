import React from 'react';
// 🛑 CRITICAL FIX: Ensure you import from the root 'react-dom' 
// for react-snap's required functions (hydrate, render)
import { hydrate, render } from 'react-dom'; 

import './styles/Global.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';

// 🎯 CRITICAL: Check if the 'root' element already has children (i.e., pre-rendered content).
const rootElement = document.getElementById('root');
const AppToRender = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  // If pre-rendered HTML is present, use hydrate to attach event listeners.
  // This uses the compatibility layer expected by react-snap.
  hydrate(AppToRender, rootElement);
} else {
  // Otherwise, perform a normal client-side render.
  render(AppToRender, rootElement);
}

// Ensure your 'serviceWorker.unregister()' is called here if you have one.
// serviceWorker.unregister();
reportWebVitals();