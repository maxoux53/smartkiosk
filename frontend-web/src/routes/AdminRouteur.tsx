import Admin from "../pages/admin/Admin";
import Category from "../pages/admin/management/Category";
import Event from "../pages/admin/management/Event";
import Membership from "../pages/admin/management/membership";
import OrderLine from "../pages/admin/management/orderline";
import Product from "../pages/admin/management/product";
import Purchase from "../pages/admin/management/purchase";
import User from "../pages/admin/management/user";
import Vat from "../pages/admin/management/vat";

const adminRoutes = [
    {
        path: "/admin",
        element: <Admin />
    },
    {
        path: "/admin/user/add",
        element: <User />
    },
    {
        path: "/admin/user/edit",
        element: <User />
    },
    {
        path: "/admin/membership/add",
        element: <Membership />
    },
    {
        path: "/admin/membership/edit",
        element: <Membership />
    },
    {
        path: "/admin/event/add",
        element: <Event />
    },
    {
        path: "/admin/event/edit",
        element: <Event />
    },
    {
        path: "/admin/purchase/add",
        element: <Purchase />
    },
    {
        path: "/admin/purchase/edit",
        element: <Purchase />
    },
    {
        path: "/admin/orderline/add",
        element: <OrderLine />
    },
    {
        path: "/admin/orderline/edit",
        element: <OrderLine />
    },
    {
        path: "/admin/product/add",
        element: <Product />
    },
    {
        path: "/admin/product/edit",
        element: <Product />
    },
    {
        path: "/admin/category/add",
        element: <Category />
    },
    {
        path: "/admin/category/edit",
        element: <Category />
    },
    {
        path: "/admin/vat/add",
        element: <Vat />
    },
    {
        path: "/admin/vat/edit",
        element: <Vat />
    }
];

export default adminRoutes;
