import { type JSX } from "react";
import MembershipComponent from "../../../components/admin/management/Membership";
import { useLocation, type Location } from "react-router-dom";
import type { membership } from "../../../type";

export default function Membership(): JSX.Element {
    const location: Location = useLocation();

    const membership: membership = location.state?.membership;

    return membership ?
            <MembershipComponent
                data={membership}
                actionButton={() => console.log("Modification BDD")}
            />
        :   <MembershipComponent
                actionButton={() => console.log("Ajout BDD")}
            />;
}
