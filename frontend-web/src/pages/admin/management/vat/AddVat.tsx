import { type JSX } from "react";
import VatComponent from "../../../../components/management/admin/Vat";

export default function Vat(): JSX.Element {
    return (
        <VatComponent actionButton={() => console.log("Modification BDD")} />
    );
}
