import { type JSX } from "react";
import Membership from "../../../../components/management/common/Membership";

export default function AddMembership(): JSX.Element {
    return (
        <main>
            <Membership actionButton={() => console.log("Modification BDD")} />
        </main>
    );
}
