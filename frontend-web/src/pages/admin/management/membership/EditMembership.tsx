import { type JSX } from "react";
import MembershipComponent from "../../../../components/admin/management/Membership";
//import { useParams } from "react-router-dom";
import type { membership } from "../../../../type";

export default function Membership(): JSX.Element {
    //const params = useParams();

    const membership: membership | null = null; // voir plus tard avec la requête à l'api avec l'id

    return membership ?
            <MembershipComponent
                data={membership}
                actionButton={() => console.log("Modification BDD")}
            />
        :   <></>; // voir pour l'erreur avec l'api
}
