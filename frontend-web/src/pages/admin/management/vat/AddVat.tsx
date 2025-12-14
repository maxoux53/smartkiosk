import { type JSX } from "react";
import VatComponent from "../../../../components/admin/management/Vat";

export default function Vat(): JSX.Element {
    return (
        <VatComponent
            actionButton={() => console.log("Modification BDD")}
        />
    )
}