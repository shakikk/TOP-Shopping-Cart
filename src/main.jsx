import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Homepage from './Homepage.jsx';
import Products from './components/Products.jsx';
import Cart from './components/Cart.jsx';
import { CartProvider } from './components/CartContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Homepage />),
  },
  {
    path: "/Products",
    element: (<Products />),
    children: [
      {},
    ]
  },
  {
    path: "/Cart",
    element: (<Cart />),
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
