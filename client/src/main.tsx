import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import ErrorPage from './pages/ErrorPage.tsx';
import Login from './pages/Login.tsx';
import Landing from './pages/Landing.tsx';
import Landing from './pages/Landing.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    element: <Login />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: '/landing',
        element: <Landing />,
      },

    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
