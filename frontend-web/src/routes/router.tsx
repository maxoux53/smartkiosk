import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Gestion from "../pages/Gestion"

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login></Login>
    },

    {
        path: '/',
        element: <Gestion></Gestion>
    }
])

export default router;