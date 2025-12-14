import { type JSX } from "react";
import UserComponent from "../../../../components/admin/management/User";

export default function User(): JSX.Element {
    return (
        <UserComponent actionButton={() => console.log("Modification BDD")} />
    );
}
