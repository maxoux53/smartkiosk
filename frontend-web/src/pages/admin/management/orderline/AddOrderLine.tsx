import { type JSX } from "react";
import OrderLine from "../../../../components/management/admin/OrderLine";

export default function AddOrderLine(): JSX.Element {
    return (
        <main>
            <OrderLine actionButton={() => console.log("Modification BDD")} />
        </main>
    );
}
