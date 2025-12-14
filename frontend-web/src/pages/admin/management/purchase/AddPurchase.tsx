import { type JSX } from "react";
import PurchaseComponent from "../../../../components/admin/management/Purchase";

export default function Purchase(): JSX.Element {
    return (
        <PurchaseComponent
            actionButton={() => console.log("Modification BDD")}
        />
    )
}
