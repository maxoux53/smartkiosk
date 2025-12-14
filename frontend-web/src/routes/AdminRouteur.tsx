import Admin from "../pages/admin/Admin";
import AddCategory from "../pages/admin/management/category/AddCategory";
import EditCategory from "../pages/admin/management/category/EditCategory";
import AddEvent from "../pages/admin/management/event/AddEvent";
import EditEvent from "../pages/admin/management/event/EditEvent";
import AddMembership from "../pages/admin/management/membership/AddMembership";
import EditMembership from "../pages/admin/management/membership/EditMembership";
import AddOrderLine from "../pages/admin/management/orderline/AddOrderLine";
import EditOrderLine from "../pages/admin/management/orderline/EditOrderLine";
import AddProduct from "../pages/admin/management/product/AddProduct";
import EditProduct from "../pages/admin/management/product/EditProduct";
import AddPurchase from "../pages/admin/management/purchase/AddPurchase";
import EditPurchase from "../pages/admin/management/purchase/EditPurchase";
import AddUser from "../pages/admin/management/user/AddUser";
import EditUser from "../pages/admin/management/user/EditUser";
import AddVat from "../pages/admin/management/vat/AddVat";
import EditVat from "../pages/admin/management/vat/EditVat";

const adminRoutes = [
    {
        path: "/admin",
        element: <Admin />
    },
    {
        path: "/admin/user/add",
        element: <AddUser />
    },
    {
        path: "/admin/user/edit/:id",
        element: <EditUser />
    },
    {
        path: "/admin/membership/add",
        element: <AddMembership />
    },
    {
        path: "/admin/membership/edit/:userId/:eventId",
        element: <EditMembership />
    },
    {
        path: "/admin/event/add",
        element: <AddEvent />
    },
    {
        path: "/admin/event/edit/:id",
        element: <EditEvent />
    },
    {
        path: "/admin/purchase/add",
        element: <AddPurchase />
    },
    {
        path: "/admin/purchase/edit/:id",
        element: <EditPurchase />
    },
    {
        path: "/admin/orderline/add",
        element: <AddOrderLine />
    },
    {
        path: "/admin/orderline/edit/:purchaseId/:productId",
        element: <EditOrderLine />
    },
    {
        path: "/admin/product/add",
        element: <AddProduct />
    },
    {
        path: "/admin/product/edit/:id",
        element: <EditProduct />
    },
    {
        path: "/admin/category/add",
        element: <AddCategory />
    },
    {
        path: "/admin/category/edit/:id",
        element: <EditCategory />
    },
    {
        path: "/admin/vat/add",
        element: <AddVat />
    },
    {
        path: "/admin/vat/edit/:id",
        element: <EditVat />
    }
];

export default adminRoutes;
