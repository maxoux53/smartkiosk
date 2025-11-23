import { type JSX } from "react";
import EventComponent from "../../../components/admin/management/Event";
import { useLocation, type Location } from "react-router-dom";
import type { event } from "../../../type";

export default function Event(): JSX.Element {
    const location: Location = useLocation();

    const event: event = location.state?.event;

    return event ?
            <EventComponent
                data={event}
                actionButton={() => console.log("Modification BDD")}
            />
        :   <EventComponent actionButton={() => console.log("Ajout BDD")} />;
}
