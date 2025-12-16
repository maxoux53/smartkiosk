import { type JSX } from "react";
import User from "../../../../components/management/admin/User";
//import { useParams } from "react-router-dom";
import type { user } from "../../../../type";

export default function EditUser(): JSX.Element {
    //const params = useParams();

    const user: user | null = null; // voir plus tard avec la requête à l'api avec l'id

    return (
        <main>
            {user ?
                <User
                    data={user}
                    actionButton={() => console.log("Modification BDD")}
                />
            :   <></>}
        </main>
    );
}
