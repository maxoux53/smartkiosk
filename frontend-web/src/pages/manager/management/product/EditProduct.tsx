import { type JSX } from "react";
import ProductMnagement from "../../../../components/management/common/Product";

export default function EditProduct(): JSX.Element {

    // récupérer data avec l'api

    return (
        <main>
            <ProductMnagement
                actionButton={() => console.log("Modification BDD")}
                isAdmin={false}
            />
        </main>
    );
}