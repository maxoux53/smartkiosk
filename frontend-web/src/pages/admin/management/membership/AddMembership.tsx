import { type JSX } from "react";
import MembershipComponent from "../../../../components/admin/management/Membership";

export default function Membership(): JSX.Element {
    return (
        <MembershipComponent
            actionButton={() => console.log("Modification BDD")}
        />
    );
}
