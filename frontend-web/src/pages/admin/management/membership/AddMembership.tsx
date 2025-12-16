import { type JSX } from "react";
import MembershipComponent from "../../../../components/management/common/Membership";

export default function Membership(): JSX.Element {
    return (
        <main>
            <MembershipComponent
                actionButton={() => console.log("Modification BDD")}
            />
        </main>
    );
}

