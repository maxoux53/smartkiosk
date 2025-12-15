import { type JSX } from "react";
import { TABLES } from "../../constant";
import UserTable from "../../components/admin/table/User";
import MembershipTable from "../../components/admin/table/Membership";
import EventTable from "../../components/admin/table/Event";
import PurchaseTable from "../../components/admin/table/Purchase";
import OrderLineTable from "../../components/admin/table/OrderLine";
import ProductTable from "../../components/admin/table/Product";
import CategoryTable from "../../components/admin/table/Category";
import VatTable from "../../components/admin/table/Vat";
import TabBar from "../TabBar"

const sections: Record<string, JSX.Element> = {
    [TABLES.USERS]: <UserTable />,
    [TABLES.MEMBERSHIPS]: <MembershipTable />,
    [TABLES.EVENTS]: <EventTable />,
    [TABLES.PURCHASES]: <PurchaseTable />,
    [TABLES.ORDER_LINES]: <OrderLineTable />,
    [TABLES.PRODUCTS]: <ProductTable />,
    [TABLES.CATEGORIES]: <CategoryTable />,
    [TABLES.VATS]: <VatTable />
};

export default function Admin(): JSX.Element {
    

    return (
        <>
            <TabBar sections={sections}/>
        </>
    );
}
