import { type JSX } from "react";
import { TABLES } from "../../constant";
import UserTable from "../../components/table/admin/User";
import MembershipTable from "../../components/table/admin/Membership";
import EventTable from "../../components/table/admin/Event";
import PurchaseTable from "../../components/table/admin/Purchase";
import OrderLineTable from "../../components/table/admin/OrderLine";
import ProductTable from "../../components/table/admin/Product";
import CategoryTable from "../../components/table/admin/Category";
import VatTable from "../../components/table/admin/Vat";
import TabBar from "../../components/other/TabBar";
import Header from "../../components/other/Header";

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
        <main>
            <Header title="Administrateur" />

            <TabBar sections={sections} />
        </main>
    );
}
