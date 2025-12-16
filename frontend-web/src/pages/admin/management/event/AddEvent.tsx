import { type JSX } from "react";
import EventComponent from "../../../../components/management/common/Event";

export default function Event(): JSX.Element {
    return (
        <EventComponent actionButton={() => console.log("Modification BDD")} />
    );
}
