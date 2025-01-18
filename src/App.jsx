import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from '@/layouts/AppLayout';
import Landing from '@/pages/Landing';
import Watch from '@/pages/Watch';
import SearchDatabase from '@/pages/SearchDatabase';
import FAQ from '@/pages/FAQ';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/watch',
        element: <Watch />,
      },
      {
        path: '/search',
        element: <SearchDatabase />,
      },
      {
        path: '/faq',
        element: <FAQ />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
