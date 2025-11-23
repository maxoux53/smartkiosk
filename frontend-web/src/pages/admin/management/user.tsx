import { type JSX } from "react";
import UserComponent from "../../../components/admin/management/User";
import { useLocation, type Location } from "react-router-dom";
import type { user } from "../../../type";

export default function User(): JSX.Element {
    const location: Location = useLocation();

    const user: user = location.state?.user;

    return user ?
            <UserComponent
                data={user}
                actionButton={() => console.log("Modification BDD")}
            />
        :   <UserComponent actionButton={() => console.log("Ajout BDD")} />;
}
