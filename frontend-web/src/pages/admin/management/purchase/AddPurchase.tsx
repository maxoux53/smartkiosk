import { type JSX } from "react";
import PurchaseComponent from "../../../../components/management/common/Purchase";

export default function Purchase(): JSX.Element {
    return (
        <PurchaseComponent
            actionButton={() => console.log("Modification BDD")}
        />
    );
}
