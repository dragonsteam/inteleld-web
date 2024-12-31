import { Navigate } from 'react-router-dom';

import Logout from '@/pages/Logout';
import Dashboard from '@/pages/Dashboard';
import Map from '@/pages/Map/Map';
import DispatchBoard from '@/pages/DispatchBoard/DispatchBoard';
import Customers from '@/pages/Customers/Customers';
import Users from '@/pages/Users/Users';
import Drivers from '@/pages/Drivers/Drivers';
import Trucks from '@/pages/Trucks/Trucks';
import Trailers from '@/pages/Trailers/Trailers';
import TollReports from '@/pages/TollReports/TollReports';
import TollRecords from '@/pages/TollRecords/TollRecords';
import DataServices from '@/pages/DataServices/DataServices';
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
    { path: '/board', element: <DispatchBoard /> },
    { path: '/customers', element: <Customers /> },
    { path: '/users', element: <Users /> },
    { path: '/drivers', element: <Drivers /> },
    { path: '/trucks', element: <Trucks /> },
    { path: '/trailers', element: <Trailers /> },
    { path: '/toll-reports', element: <TollReports /> },
    { path: '/toll-reports/:id/records', element: <TollRecords /> },
    { path: '/data-services', element: <DataServices /> },

    { path: '*', element: <NotFoundPage /> },
  ],
};

export default routes;
