import type { JSX } from "react";
import Event from "../../components/other/Event";
import Header from "../../components/other/Header";

function EventListing(): JSX.Element {
    return (
        <main>
            <Header title="Évènements" />
            <div>
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
