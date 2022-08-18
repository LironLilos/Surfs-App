import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { AppProvider } from './context/cart_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </ProductsProvider>
  </React.StrictMode>
);
