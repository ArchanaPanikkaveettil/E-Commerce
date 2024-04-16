import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductList from './Pages/ProductList';
import ProductDetails from './Pages/ProductDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <App />

  </React.StrictMode>

);

reportWebVitals();
