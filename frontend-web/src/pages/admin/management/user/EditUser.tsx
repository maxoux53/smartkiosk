import { type JSX } from "react";
import UserComponent from "../../../../components/admin/management/User";
//import { useParams } from "react-router-dom";
import type { user } from "../../../../type";

export default function User(): JSX.Element {
    //const params = useParams();

    const user: user | null = null; // voir plus tard avec la requête à l'api avec l'id

    return user ?
            <UserComponent
                data={user}
                actionButton={() => console.log("Modification BDD")}
            />
        :   <></>; // voir pour l'erreur avec l'api
}