import type { JSX } from "react";
import Event from "../../components/management/common/Event";
import type { event } from "../../type";
import { connect } from "../../API/connect";
import { useModal } from "../../contexts/ModalContext";
import { useNavigate } from "react-router-dom";

export default function CreateEvent(): JSX.Element {
    const {setTitle ,openModal, setMessage} = useModal();
    const navigate = useNavigate();

    const create = async (event: event) => {
        try {
            await connect("/interact/me/event", "POST", {
                name: event.name,
                location: event.location,
                is_active: true,
                iban: event.iban,
                image: null
            })
            setTitle("Création d'un évènement");
            setMessage("Évènement créé avec succès");
            openModal();
            navigate(-1);
        } catch (e) {
            setTitle("Erreur")
            setMessage(String(e));
            openModal();
        }
    }

    return (
        <main>
            <Event actionButton={create} />
        </main>
    );
}
