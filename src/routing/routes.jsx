import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home/Home";
import EldLogs from "../components/EldLogs/EldLogs";
import Drivers from "../components/Drivers/Drivers";
import NewDriver from "../components/Drivers/NewDriver";
import Trucks from "../components/Trucks/Trucks";
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
      { path: "eld-logs", element: <EldLogs /> },

      { path: "drivers", element: <Drivers /> },
      { path: "drivers/new", element: <NewDriver /> },

      { path: "trucks", element: <Trucks /> },
      { path: "messages", element: <Messages /> },
      { path: "settings", element: <Setting /> },

      // { path: "vendor/:id", element: <Vendor /> },
    ],
  },
  { path: "*", element: <PageNotFound /> },
]);

export default router;
