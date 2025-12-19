import { type JSX } from "react";
import Vat from "../../../../components/management/admin/Vat";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../../../contexts/ModalContext";
import { connect } from "../../../../API/connect";

export default function AddVat(): JSX.Element {
    const navigate = useNavigate();
    const {setTitle, openModal, setMessage} = useModal();

    return (
        <main>
            <Vat actionButton={async (vat) => {
                try {
                    await connect("/interact/vat/", "POST", {
                        rate: vat.rate,
                        type: vat.type
                    })
                    setTitle("Création d'une TVA");
                    setMessage("TVA ajouté avec succès");
                    openModal();
                    navigate(-1)
                } catch (e) {
                    setTitle("Erreur");
                    setMessage(String(e));
                    openModal();
                }
            }} />
        </main>
    );
}
