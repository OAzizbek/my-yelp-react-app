// Import required modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Find the container element where the app will be rendered
const container = document.getElementById('container');

// Create a root instance and attach it to the container element
const root = ReactDOM.createRoot(container);

// Render the App component inside the root instance
root.render(<App />);
