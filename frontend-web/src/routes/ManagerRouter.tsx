import AddProduct from "../pages/manager/management/product/AddProduct";
import EditProduct from "../pages/manager/management/product/EditProduct";
import AddCashier from "../pages/manager/management/user/AddCashier";
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
    {
        path: "/manager/event/:eventId/add/cashier",
        element: <AddCashier />
    }
]

export default managerRoutes