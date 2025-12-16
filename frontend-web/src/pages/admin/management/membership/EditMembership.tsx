import { type JSX } from "react";
import MembershipComponent from "../../../../components/management/common/Membership";
//import { useParams } from "react-router-dom";
import type { membership } from "../../../../type";

export default function Membership(): JSX.Element {
    //const params = useParams();

    const membership: membership | null = null; // voir plus tard avec la requête à l'api avec l'id

    return (
        <main>
            {membership ? (
                <MembershipComponent
                    data={membership}
                    actionButton={() => console.log("Modification BDD")}
                />
            ) : (
                <></>
            )}
        </main>
    );
}

