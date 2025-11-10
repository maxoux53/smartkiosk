import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import EventList from "../pages/EventList";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login></Login>
    },

    {
        path: "/admin",
        element: <Admin></Admin>
    },

    {
        path: "/",
        element: <EventList></EventList>
    }
]);

export default router;
