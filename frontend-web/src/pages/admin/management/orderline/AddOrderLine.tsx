import { type JSX } from "react";
import OrderLineComponent from "../../../../components/management/common/OrderLine";

export default function OrderLine(): JSX.Element {
    return (
        <main>
            <OrderLineComponent
                actionButton={() => console.log("Modification BDD")}
            />
        </main>
    );
}

