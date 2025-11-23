import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
// Admin
import AdminRouteur from "./AdminRouteur";

import EventListing from "../pages/EventListing";
import EventManager from "../pages/EventManager";

const router = createBrowserRouter([
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
