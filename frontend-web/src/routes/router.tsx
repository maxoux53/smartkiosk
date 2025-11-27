import { createBrowserRouter } from "react-router-dom";
import UnknowPage from "../pages/UnknowPage";
import Login from "../pages/Login";
import EventListing from "../pages/EventListing";
import EventManager from "../pages/EventManager";

import AdminRouteur from "./AdminRouteur";

const router = createBrowserRouter([
    {
        path: "*",
        element: <UnknowPage/>
    },
    {
        path: "/login",
        element: <Login />
    },

    {
        path: "/",
        element: <EventListing />
    },

    ...AdminRouteur,

    {
        path: "/manager",
        element: <EventManager />
    }
]);

export default router;
