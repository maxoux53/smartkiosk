import { type JSX } from "react";
import Vat from "../../../../components/management/admin/Vat";

export default function AddVat(): JSX.Element {
    return (
        <main>
            <Vat actionButton={() => console.log("Modification BDD")} />
        </main>
    );
}
