import { type JSX } from "react";
import VatComponent from "../../../../components/management/admin/Vat";
//import { useParams } from "react-router-dom";
import type { vat } from "../../../../type";

export default function Vat(): JSX.Element {
    //const params = useParams();

    const vat: vat | null = null; // voir plus tard avec la requête à l'api avec l'id

    return vat ?
            <VatComponent
                data={vat}
                actionButton={() => console.log("Modification BDD")}
            />
        :   <></>; // voir pour l'erreur avec l'api
}
