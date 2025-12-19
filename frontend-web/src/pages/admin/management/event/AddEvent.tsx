import { type JSX } from "react";
import Event from "../../../../components/management/common/Event";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../../../contexts/ModalContext";
import { connect } from "../../../../API/connect";

export default function AddEvent(): JSX.Element {
    const navigate = useNavigate();
    const {setTitle, openModal, setMessage} = useModal();

    return (
        <main>
            <Event actionButton={async (product) => {
                try {
                    await connect("/interact/me/event", "POST", {
                        name: product.name,
                        location: product.location,
                        is_active: product.is_active,
                        iban: product.iban,
                        image: "12345"
                    })
                    setTitle("Création d'un évènement");
                    setMessage("Évènement ajouté avec succès");
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
