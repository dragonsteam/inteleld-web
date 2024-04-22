import { Navigate } from 'react-router-dom';

import Logout from '@/pages/Logout';
import Dashboard from '@/pages/Dashboard';
import Map from '@/pages/Map/Map';
import Drivers from '@/pages/Drivers/Drivers';
import Trucks from '@/pages/Trucks/Trucks';
import NotFoundPage from '@/pages/NotFound';

let routes = {
  default: [
    {
      path: '/login',
      element: <Navigate to="/" />,
    },
    {
      path: '/logout',
      element: <Logout />,
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
    { path: '/map', element: <Map /> },
    { path: '/drivers', element: <Drivers /> },
    { path: '/trucks', element: <Trucks /> },

    { path: '*', element: <NotFoundPage /> },
  ],
};

export default routes;
