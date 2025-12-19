import { type JSX } from "react";
import OrderLine from "../../../../components/management/admin/OrderLine";
//import { useParams } from "react-router-dom";
import type { order_line } from "../../../../type";

export default function EditOrderLine(): JSX.Element {
    //const params = useParams();

    const orderLine: order_line | null = null; // voir plus tard avec la requête à l'api avec l'id

    return (
        <main>
            {orderLine ?
                <OrderLine
                    data={orderLine}
                    actionButton={() => console.log("Modification BDD")}
                />
            :   <></>}
        </main>
    );
}
