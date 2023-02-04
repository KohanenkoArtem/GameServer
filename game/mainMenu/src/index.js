import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';

const app = ReactDOMClient.createRoot(document.getElementById('root'))

app.render(<App/>)