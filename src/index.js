import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './App';
import Cart from './pages/cart';
import Profile from "./pages/profile"
import Layout from './layout';
import Product from './pages/product';
import { Provider } from 'react-redux';
import store from './Store/cartStore';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "products/:productId",
        element: <Product />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

