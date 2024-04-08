import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home/Home";
import DriverLogs from "../components/DriverLogs/DriverLogs";
import DriverLog from "../components/DriverLogs/DriverLog";
import Drivers from "../components/Drivers/Drivers";
import NewDriver from "../components/Drivers/NewDriver";
import EditDriver from "../components/Drivers/EditDriver";
import Trucks from "../components/Trucks/Trucks";
import NewTruck from "../components/Trucks/NewTruck";
import EditTruck from "../components/Trucks/EditTruck";
import Messages from "../components/Messages/Messages";
import Setting from "../components/Settings/Setting";
import Login from "../components/Login/Login";
import Logout from "../components/Logout";
import Signup from "../components/Signup";
import PageNotFound from "../components/PageNotFound";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/logout", element: <Logout /> },
  { path: "/signup", element: <Signup /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "driver-logs", element: <DriverLogs /> },
      { path: "driver-logs/:id", element: <DriverLog /> },

      { path: "drivers", element: <Drivers /> },
      { path: "drivers/new", element: <NewDriver /> },
      { path: "drivers/edit/:id", element: <EditDriver /> },

      { path: "trucks", element: <Trucks /> },
      { path: "trucks/new", element: <NewTruck /> },
      { path: "trucks/edit/:id", element: <EditTruck /> },

      { path: "messages", element: <Messages /> },
      { path: "settings", element: <Setting /> },
    ],
  },
  { path: "*", element: <PageNotFound /> },
]);

export default router;
