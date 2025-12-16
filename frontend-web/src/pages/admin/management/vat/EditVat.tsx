import { type JSX } from "react";
import Vat from "../../../../components/management/admin/Vat";
//import { useParams } from "react-router-dom";
import type { vat } from "../../../../type";

export default function EditVat(): JSX.Element {
    //const params = useParams();

    const vat: vat | null = null; // voir plus tard avec la requête à l'api avec l'id

    return (
        <main>
            {vat ? (
                <Vat
                    data={vat}
                    actionButton={() => console.log("Modification BDD")}
                />
            ) : (
                <></>
            )}
        </main>
    );
}

