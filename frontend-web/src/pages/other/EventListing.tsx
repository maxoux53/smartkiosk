import type { JSX } from "react";
import Event from "../../components/other/Event";
import Disconnect from "../../components/other/Disconnect";
import "../common/roleHeader.css"

function EventListing(): JSX.Element {
    return (
        <main>
            <header className="header">
                <h1>Évènements</h1>
                <Disconnect/>
            </header>
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
