import { Navigate } from 'react-router-dom';

import Dashboard from '@/pages/Dashboard';
import Drivers from '@/pages/Drivers';
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
    { path: '/', element: <Dashboard /> },
    { path: '/drivers', element: <Drivers /> },

    { path: '*', element: <NotFoundPage /> },
  ],
};

export default routes;
