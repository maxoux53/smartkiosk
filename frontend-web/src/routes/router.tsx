import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import EventList from "../pages/EventList";
import EventManager from "../pages/EventManager";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login></Login>
    },

    {
        path: "/",
        element: <EventList></EventList>
    },

    {
        path: "/admin",
        element: <Admin></Admin>
    },

    {
        path: "/manager",
        element: <EventManager></EventManager>
    }

    
]);

export default router;
