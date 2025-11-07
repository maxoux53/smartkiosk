import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Admin from "../pages/Admin"

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login></Login>
    },

    {
        path: '/admin',
        element: <Admin></Admin>
    }
])

export default router;