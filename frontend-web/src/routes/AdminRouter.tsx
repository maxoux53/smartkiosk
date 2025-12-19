import Admin from "../pages/admin/Admin";
import AddCategory from "../pages/admin/management/category/AddCategory";
import EditCategory from "../pages/admin/management/category/EditCategory";
import AddEvent from "../pages/admin/management/event/AddEvent";
import EditEvent from "../pages/admin/management/event/EditEvent";
import AddUser from "../pages/admin/management/user/AddUser";
import EditUser from "../pages/admin/management/user/EditUser";
import AddVat from "../pages/admin/management/vat/AddVat";
import EditVat from "../pages/admin/management/vat/EditVat";

const adminRoutes = [
    {
        path: "admin",
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
        path: "/admin/event/add",
        element: <AddEvent />
    },
    {
        path: "/admin/event/edit/:id",
        element: <EditEvent />
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
