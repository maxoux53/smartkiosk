import type { JSX } from "react";
import Event from "../../components/other/Event";

function EventListing(): JSX.Element {
    return (
        <main>
            <div>
                <h1>Évènements</h1>
            </div>
            <div>
                <Event name="Test" imagePath="../../public/vite.svg" roleName="cashier" eventId={1}></Event>
            </div>
        </main>
    );
}

export default EventListing;
