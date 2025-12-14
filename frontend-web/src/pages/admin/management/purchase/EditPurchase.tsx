import { type JSX } from "react";
import PurchaseComponent from "../../../../components/admin/management/Purchase";
import { useParams } from "react-router-dom";
import type { purchase } from "../../../../type";

export default function Purchase(): JSX.Element {
    const params = useParams();

    const purchase: purchase | null = null; // voir plus tard avec la requête à l'api avec l'id

    return purchase ?
            <PurchaseComponent
                data={purchase}
                actionButton={() => console.log("Modification BDD")}
            />
        :   <></>; // voir pour l'erreur avec l'api
}