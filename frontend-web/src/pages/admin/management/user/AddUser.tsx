import { type JSX } from "react";
import User from "../../../../components/management/admin/User";

export default function AddUser(): JSX.Element {
    return (
        <main>
            <User actionButton={() => console.log("Modification BDD")} />
        </main>
    );
}
