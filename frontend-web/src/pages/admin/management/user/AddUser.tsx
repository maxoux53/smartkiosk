import { type JSX } from "react";
import UserComponent from "../../../../components/management/admin/User";

export default function User(): JSX.Element {
    return (
        <UserComponent actionButton={() => console.log("Modification BDD")} />
    );
}
