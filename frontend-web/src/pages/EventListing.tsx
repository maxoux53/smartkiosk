import type { JSX } from "react";
import Event from "../components/Event";

function EventListing(): JSX.Element {
    return (
        <main>
            <div>
                <h1>Évènements</h1>
            </div>
            <div>
                <Event name="Test" imagePath="../../public/vite.svg"></Event>
            </div>
        </main>
    );
}

export default EventListing;
