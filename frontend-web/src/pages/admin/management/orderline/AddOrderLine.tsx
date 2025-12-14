import { type JSX } from "react";
import OrderLineComponent from "../../../../components/admin/management/OrderLine";

export default function OrderLine(): JSX.Element {
    return (
        <OrderLineComponent
            actionButton={() => console.log("Modification BDD")}
        />
    )
}
