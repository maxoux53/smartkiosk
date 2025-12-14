import { type JSX } from "react";
import VatComponent from "../../../components/admin/management/Vat";
import { useParams } from "react-router-dom";
import type { vat } from "../../../type";

export default function Vat(): JSX.Element {
    const params = useParams();

    const vat: vat | null = null; // requête à l'api avec l'id

    return vat ?
            <VatComponent
                data={vat}
                actionButton={() => console.log("Modification BDD")}
            />
        :   <VatComponent actionButton={() => console.log("Ajout BDD")} />;
}
