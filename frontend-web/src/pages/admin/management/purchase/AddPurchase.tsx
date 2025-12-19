import { type JSX } from "react";
import Purchase from "../../../../components/management/admin/Purchase";

export default function AddPurchase(): JSX.Element {
    return (
        <main>
            <Purchase actionButton={() => console.log("Modification BDD")} />
        </main>
    );
}
