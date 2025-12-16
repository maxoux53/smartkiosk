import AddProduct from "../pages/host/management/product/AddProduct";
import EditProduct from "../pages/host/management/product/EditProduct";
import AddCashier from "../pages/host/management/user/AddCashier";
import Host from "../pages/host/Host";

const hostRoutes = [
    {
        path: "/host/event/:eventId",
        element: <Host />
    },
    {
        path: "/host/event/:eventId/add/product",
        element: <AddProduct />
    },
    {
        path: "/host/event/:eventId/edit/product/:productId",
        element: <EditProduct />
    },
    {
        path: "/host/event/:eventId/add/cashier",
        element: <AddCashier />
    }
]

export default hostRoutes