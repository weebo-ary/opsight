import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MainRoutes from './routes/MainRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainRoutes />
  </React.StrictMode>
);