import { Navigate } from 'react-router-dom';

import Home from '@/components/Home/Home';
import NotFoundPage from '@/pages/NotFound';

let routes = {
  default: [
    {
      path: '/login',
      element: <Navigate to="/" />,
    },
    {
      path: '/verify/*',
      element: <Navigate to="/" />,
    },
    {
      path: '/resetpassword/*',
      element: <Navigate to="/" />,
    },
    //
    { path: '/', element: <Home /> },
    { path: '*', element: <NotFoundPage /> },
  ],
};

export default routes;
