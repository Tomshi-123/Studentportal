import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import 'bootswatch/dist/litera/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Studentportal">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
