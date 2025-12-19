import { useMemo, type JSX } from "react";
import Vat from "../../../../components/management/admin/Vat";
import { useModal } from "../../../../contexts/ModalContext";
import { useNavigate, useParams } from "react-router-dom";
import type { vat } from "../../../../type";
import { connect } from "../../../../API/connect";

export default function EditVat(): JSX.Element {
    const {setTitle, openModal, setMessage} = useModal();
    const navigate = useNavigate();
    const params = useParams();

    if (!params.id) {
        setTitle("Erreur");
        setMessage("L'id de la TVA n'est pas trouvé");
        openModal();
        navigate(-1);
    }

    const vatFetch: Promise<vat | undefined> = useMemo(
        async () => {
            try {
                return await connect(`/interact/vat/${params.id}`, "GET");
            } catch (e) {
                setTitle("Erreur");
                setMessage(String(e));
                openModal();
            }
        },[]
    )

    return (
        <main>
            {vatFetch ?
                <Vat
                    data={vatFetch}
                    actionButton={async (vat) => {
                        try {
                            await connect(`/interact/vat/${vat.type}`, "PATCH", {
                                type: vat.type,
                                rate: vat.rate
                            })
                            setTitle("Édition d'une TVA");
                            setMessage("TVA modifiée avec succès");
                            openModal();
                            navigate(-1)
                        } catch (e) {
                            setTitle("Erreur");
                            setMessage(String(e));
                            openModal();
                        }
                    }}
                />
            :   <></>}
        </main>
    );
}
