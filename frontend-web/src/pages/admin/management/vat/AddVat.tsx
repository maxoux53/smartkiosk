import { type JSX } from "react";
import VatComponent from "../../../../components/management/admin/Vat";

export default function Vat(): JSX.Element {
    return (
        <main>
            <VatComponent
                actionButton={() => console.log("Modification BDD")}
            />
        </main>
    );
}

