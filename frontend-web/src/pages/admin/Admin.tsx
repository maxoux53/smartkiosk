import { type JSX } from "react";
import { TABLES } from "../../constant";
import UserTable from "../../components/table/admin/User";
import EventTable from "../../components/table/admin/Event";
import CategoryTable from "../../components/table/admin/Category";
import VatTable from "../../components/table/admin/Vat";
import TabBar from "../../components/other/TabBar";
import Header from "../../components/other/Header";

const sections: Record<string, JSX.Element> = {
    [TABLES.USERS]: <UserTable />,
    [TABLES.EVENTS]: <EventTable />,
    [TABLES.CATEGORIES]: <CategoryTable />,
    [TABLES.VATS]: <VatTable />
};

export default function Admin(): JSX.Element {
    return (
        <main>
            <Header title="Administrateur" hasBackButton={true} />

            <TabBar sections={sections} />
        </main>
    );
}
