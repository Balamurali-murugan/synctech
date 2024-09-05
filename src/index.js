import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.css'; // Tailwind CSS styles
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter> {/* Wrap your App with BrowserRouter */}
    <App/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
