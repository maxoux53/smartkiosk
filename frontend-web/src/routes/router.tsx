import { createBrowserRouter } from "react-router-dom";
import UnknowPage from "../pages/errors/UnknowPage";
import Login from "../pages/other/Login";
import EventListing from "../pages/other/EventListing";

import adminRoutes from "./AdminRouter";
import hostRoutes from "./HostRouter";
import Cashier from "../pages/cashier/Cashier";
import CreateEvent from "../pages/other/CreateEvent";

const router = createBrowserRouter([
    {
        path: "*",
        element: <UnknowPage />
    },
    {
        path: "/login",
        element: <Login />
    },

    {
        path: "/",
        element: <EventListing />
    },
    {
        path: "/createEvent",
        element: <CreateEvent />
    },
    {
        path: "/cashier/event/:eventId",
        element: <Cashier />
    },

    ...adminRoutes,

    ...hostRoutes
]);

export default router;
