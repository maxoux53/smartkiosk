import { createBrowserRouter } from "react-router-dom";
import UnknowPage from "../pages/errors/UnknowPage";
import Login from "../pages/other/Login";
import EventListing from "../pages/other/EventListing";

import adminRoutes from "./AdminRouter";
import managerRoutes from "./ManagerRouter";
import Cashier from "../pages/cashier/Cashier";

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
        path: "/cashier/event/:eventId",
        element: <Cashier/>
    },

    ...adminRoutes,

    ...managerRoutes

]);

export default router;
