import type { JSX } from "react";
import Event from "../../components/other/Event";
import Header from "../../components/other/Header";
import "./eventListing.css"
import { useNavigate } from "react-router-dom";

function EventListing(): JSX.Element {
    const navigate = useNavigate();

    const admin: boolean = true;

    return (
        <main>
            <Header title="Évènements" hasBackButton={false} />
            <div id="nav">
                <button onClick={() => navigate("/createEvent")}>Créer un évènement</button>
                {
                    admin ? (
                        <button onClick={() => navigate("/admin")}>Administrateur</button>
                    ) :
                    <></>
                }
            </div>
            <div>
                <Event
                    name="Test"
                    imagePath="../../public/vite.svg"
                    roleName="host"
                    eventId={1}
                ></Event>
                <Event
                    name="Test"
                    imagePath="../../public/vite.svg"
                    roleName="cashier"
                    eventId={1}
                ></Event>
                <Event
                    name="Test"
                    imagePath="../../public/vite.svg"
                    roleName="host"
                    eventId={1}
                ></Event>
            </div>
        </main>
    );
}

export default EventListing;
