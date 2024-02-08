import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Normalize CSS Import
import './css/normalize.css';

// Global Bootstrap CSS and JS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Apply Custom Styles after Normalize and Bootstrap.
import './css/App.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);