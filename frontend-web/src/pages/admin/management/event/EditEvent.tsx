import { useMemo, type JSX } from "react";
import Event from "../../../../components/management/common/Event";
//import { useParams } from "react-router-dom";
import type { event } from "../../../../type";
import { connect } from "../../../../API/connect";
import { useModal } from "../../../../contexts/ModalContext";
import { useNavigate, useParams } from "react-router-dom";

export default function EditEvent(): JSX.Element {
    const {setTitle, openModal, setMessage} = useModal();
    const navigate = useNavigate();
    const params = useParams();

    if (!params.id) {
        setTitle("Erreur");
        setMessage("L'id de l'évènement n'est pas trouvé");
        openModal();
        navigate(-1);
    }

    const eventFetch: Promise<event | undefined> = useMemo(
        async () => {
            try {
                return await connect(`/interact/event/${params.id}`, "GET");
            } catch (e) {
                setTitle("Erreur");
                setMessage(String(e));
                openModal();
            }
        },[]
    )

    return (
        <main>
            {eventFetch ?
                <Event
                    data={eventFetch}
                    actionButton={async (event) => {
                        try {
                            await connect(`/interact/event/${event.id}`, "PATCH", {
                                name: event.name,
                                location: event.location,
                                is_active: event.is_active,
                                iban: event.iban,
                                image: "12345"
                            })
                            setTitle("Édition d'un évènement");
                            setMessage("évènement modifié avec succès");
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
