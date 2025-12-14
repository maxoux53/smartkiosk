import { type JSX } from "react";
import EventComponent from "../../../../components/admin/management/Event";
//import { useParams } from "react-router-dom";
import type { event } from "../../../../type";

export default function Event(): JSX.Element {
    //const params = useParams();

    const event: event | null = null; // voir plus tard avec la requête à l'api avec l'id

    return event ?
            <EventComponent
                data={event}
                actionButton={() => console.log("Modification BDD")}
            />
        :   <></>; // voir pour l'erreur avec l'api
}