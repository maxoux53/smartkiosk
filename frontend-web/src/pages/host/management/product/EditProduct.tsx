import { type JSX } from "react";
import Product from "../../../../components/management/common/Product";

export default function EditProduct(): JSX.Element {
    // récupérer data avec l'api

    return (
        <main>
            <Product
                actionButton={() => console.log("Modification BDD")}
                isAdmin={false}
            />
        </main>
    );
}
