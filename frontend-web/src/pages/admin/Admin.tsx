import { useState, type JSX } from "react";
import { TABLES } from "../../constant";
import UserTable from "../../components/admin/table/User";
import MembershipTable from "../../components/admin/table/Membership";
import EventTable from "../../components/admin/table/Event";
import PurchaseTable from "../../components/admin/table/Purchase";
import OrderLineTable from "../../components/admin/table/OrderLine";
import ProductTable from "../../components/admin/table/Product";
import CategoryTable from "../../components/admin/table/Category";
import VatTable from "../../components/admin/table/Vat";

type Section = {
    key: string;
    component: JSX.Element;
};

const sections: Section[] = [
    { key: TABLES.USERS, component: <UserTable /> },
    { key: TABLES.MEMBERSHIPS, component: <MembershipTable /> },
    { key: TABLES.EVENTS, component: <EventTable /> },
    { key: TABLES.PURCHASES, component: <PurchaseTable /> },
    { key: TABLES.ORDER_LINES, component: <OrderLineTable /> },
    { key: TABLES.PRODUCTS, component: <ProductTable /> },
    { key: TABLES.CATEGORIES, component: <CategoryTable /> },
    { key: TABLES.VATS, component: <VatTable /> }
];

export default function Admin(): JSX.Element {
    const [element, setElement] = useState<JSX.Element>(<></>);
    const [currentSection, setCurrentSection] = useState<string>("");

    return (
        <main>
            <h1>Administrateur</h1>

            <div role="group">
                {sections.map((section) => (
                    <button
                        key={section.key}
                        type="button"
                        disabled={currentSection === section.key}
                        onClick={(): void => {
                            setElement(section.component);
                            setCurrentSection(section.key);
                        }}
                    >
                        {section.key}
                    </button>
                ))}
            </div>

            {element}
        </main>
    );
}
