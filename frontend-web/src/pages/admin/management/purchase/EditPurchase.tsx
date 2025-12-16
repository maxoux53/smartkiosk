import { type JSX } from "react";
import PurchaseComponent from "../../../../components/management/common/Purchase";
//import { useParams } from "react-router-dom";
import type { purchase } from "../../../../type";

export default function Purchase(): JSX.Element {
    //const params = useParams();

    const purchase: purchase | null = null; // voir plus tard avec la requête à l'api avec l'id

    return (
        <main>
            {purchase ? (
                <PurchaseComponent
                    data={purchase}
                    actionButton={() => console.log("Modification BDD")}
                />
            ) : (
                <></>
            )}
        </main>
    );
}
