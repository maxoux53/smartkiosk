import { type JSX } from "react";
import Purchase from "../../../../components/management/common/Purchase";
//import { useParams } from "react-router-dom";
import type { purchase } from "../../../../type";

export default function AddPurchase(): JSX.Element {
    //const params = useParams();

    const purchase: purchase | null = null; // voir plus tard avec la requête à l'api avec l'id

    return (
        <main>
            {purchase ?
                <Purchase
                    data={purchase}
                    actionButton={() => console.log("Modification BDD")}
                />
            :   <></>}
        </main>
    );
}
