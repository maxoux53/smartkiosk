import { type JSX } from "react";
import Event from "../../../../components/management/common/Event";

export default function AddEvent(): JSX.Element {
    return (
        <main>
            <Event
                actionButton={() => console.log("Modification BDD")}
            />
        </main>
    );
}

