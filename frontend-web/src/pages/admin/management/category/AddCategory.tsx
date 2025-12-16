import { type JSX } from "react";
import Category from "../../../../components/management/admin/Category";

export default function AddCategory(): JSX.Element {
    return (
        <main>
            <Category
                actionButton={() => console.log("Modification BDD")}
            />
        </main>
    );
}
