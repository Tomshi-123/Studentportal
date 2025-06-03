import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import 'bootswatch/dist/litera/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { RegistrationProvider } from "./context/RegistrationContext";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Studentportal">
      <RegistrationProvider>
        <App />
      </RegistrationProvider>
    </BrowserRouter>
  </React.StrictMode>
);

