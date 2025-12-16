import { type JSX } from "react";
import ProductMnagement from "../../../../components/management/common/Product";

export default function AddProduct(): JSX.Element {
    return (
        <main>
            <ProductMnagement
                actionButton={() => console.log("Modification BDD")}
                isAdmin={false}
            />
        </main>
    );
}