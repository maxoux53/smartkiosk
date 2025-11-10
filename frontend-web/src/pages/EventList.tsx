import type { JSX } from "react";
import Event from "../components/Event";

function EventList(): JSX.Element {
    return (
        <main id="eventList">
            <div id="header">
                <h1>Évènements</h1>
            </div>
            <div id="list">
                <Event name="Test" imagePath="../../public/vite.svg"></Event>
            </div>
        </main>
    );
}

export default EventList;