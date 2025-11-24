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

export default function Admin(): JSX.Element {
    const [element, setElement] = useState<JSX.Element>(<></>);

    return (
        <main>
            <h1>Administrateur</h1>

            <div role="group">
                <button
                    type="button"
                    onClick={(): void => {
                        setElement(<UserTable />);
                    }}
                >
                    {TABLES.USERS}
                </button>
                <button
                    type="button"
                    onClick={(): void => setElement(<MembershipTable />)}
                >
                    {TABLES.MEMBERSHIPS}
                </button>
                <button
                    type="button"
                    onClick={(): void => setElement(<EventTable />)}
                >
                    {TABLES.EVENTS}
                </button>
                <button
                    type="button"
                    onClick={(): void => setElement(<PurchaseTable />)}
                >
                    {TABLES.PURCHASES}
                </button>
                <button
                    type="button"
                    onClick={(): void => setElement(<OrderLineTable />)}
                >
                    {TABLES.ORDER_LINES}
                </button>
                <button
                    type="button"
                    onClick={(): void => setElement(<ProductTable />)}
                >
                    {TABLES.PRODUCTS}
                </button>
                <button
                    type="button"
                    onClick={(): void => setElement(<CategoryTable />)}
                >
                    {TABLES.CATEGORIES}
                </button>
                <button
                    type="button"
                    onClick={(): void => setElement(<VatTable />)}
                >
                    {TABLES.VATS}
                </button>
            </div>

            {element}
        </main>
    );
}
