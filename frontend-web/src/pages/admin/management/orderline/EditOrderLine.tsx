import { type JSX } from "react";
import OrderLineComponent from "../../../../components/admin/management/OrderLine";
import { useParams } from "react-router-dom";
import type { order_line } from "../../../../type";

export default function OrderLine(): JSX.Element {
    const params = useParams();

    const orderLine: order_line | null = null; // voir plus tard avec la requête à l'api avec l'id

    return orderLine ?
            <OrderLineComponent
                data={orderLine}
                actionButton={() => console.log("Modification BDD")}
            />
        :   <></>; // voir pour l'erreur avec l'api
}