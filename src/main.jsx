import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Homepage from './Homepage.jsx';
import Products from './components/Products.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Homepage />),
  },
  {
    path: "/Products",
    element: (<Products />),
  },
  {
    path: "/Cart",
    element: (<Homepage />),
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
