import { type JSX } from "react";
import EventComponent from "../../../../components/admin/management/Event";

export default function Event(): JSX.Element {
    return (
        <EventComponent actionButton={() => console.log("Modification BDD")} />
    );
}
