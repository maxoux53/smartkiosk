import { type JSX } from "react";
import VatComponent from "../../../components/admin/management/Vat";
import { useLocation, type Location } from "react-router-dom";
import type { vat } from "../../../type";

export default function Vat(): JSX.Element {
    const location: Location = useLocation();

    const vat: vat = location.state?.vat;

    return vat ?
            <VatComponent
                data={vat}
                actionButton={() => console.log("Modification BDD")}
            />
        :   <VatComponent actionButton={() => console.log("Ajout BDD")} />;
}
