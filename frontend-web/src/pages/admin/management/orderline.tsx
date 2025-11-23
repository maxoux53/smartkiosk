import { type JSX } from "react";
import OrderLineComponent from "../../../components/admin/management/OrderLine";
import { useLocation, type Location } from "react-router-dom";
import type { order_line } from "../../../type";

export default function OrderLine(): JSX.Element {
    const location: Location = useLocation();

    const orderLine: order_line = location.state?.orderLine;

    return orderLine ?
            <OrderLineComponent
                data={orderLine}
                actionButton={() => console.log("Modification BDD")}
            />
        :   <OrderLineComponent
                actionButton={() => console.log("Ajout BDD")}
            />;
}
