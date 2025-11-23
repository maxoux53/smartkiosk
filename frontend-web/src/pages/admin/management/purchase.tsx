import { type JSX } from "react";
import PurchaseComponent from "../../../components/admin/management/Purchase";
import { useLocation, type Location } from "react-router-dom";
import type { purchase } from "../../../type";

export default function Purchase(): JSX.Element {
    const location: Location = useLocation();

    const purchase: purchase = location.state?.purchase;

    return purchase ?
            <PurchaseComponent
                data={purchase}
                actionButton={() => console.log("Modification BDD")}
            />
        :   <PurchaseComponent actionButton={() => console.log("Ajout BDD")} />;
}
