import AddProduct from "../pages/manager/management/product/AddProduct";
import EditProduct from "../pages/manager/management/product/EditProduct";
import Manager from "../pages/manager/Manager";

const managerRoutes = [
    {
        path: "/manager/event/:eventId",
        element: <Manager />
    },
    {
        path: "/manager/event/:eventId/add/product",
        element: <AddProduct />
    },
    {
        path: "/manager/event/:eventId/edit/product/:productId",
        element: <EditProduct />
    },
]

export default managerRoutes