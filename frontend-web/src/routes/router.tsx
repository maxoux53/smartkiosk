import { createBrowserRouter } from "react-router-dom";
import UnknowPage from "../pages/errors/UnknowPage";
import Login from "../pages/Login";
import EventListing from "../pages/EventListing";

import adminRoutes from "./AdminRouter";
import managerRoutes from "./ManagerRouter";

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

    ...adminRoutes,

    ...managerRoutes

]);

export default router;
