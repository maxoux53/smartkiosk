import { useMemo, useState, type JSX } from "react";
import Event from "../../components/other/Event";
import Header from "../../components/other/Header";
import "./eventListing.css";
import { useNavigate } from "react-router-dom";
import { checkIsAdmin } from "../../API/auth";

function EventListing(): JSX.Element {
    const [isAdmin, setIsadmin] = useState<Boolean>(false);
    const navigate = useNavigate();

    async () => {
        const adminStatus = await checkIsAdmin();
        setIsadmin(adminStatus);
    }    

    return (
        <main>
            <Header title="Évènements" hasBackButton={false} />
            <div id="nav">
                <button type="button" onClick={() => navigate("/createEvent")}>
                    Créer un évènement
                </button>
                {isAdmin ?
                    <button type="button" onClick={() => navigate("/admin")}>
                        Administrateur
                    </button>
                :   <></>}
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
