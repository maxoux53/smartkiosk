import { type JSX } from "react";
import Product from "../../../../components/management/common/Product";

export default function AddProduct(): JSX.Element {
    return (
        <main>
            <Product actionButton={() => console.log("Modification BDD")} />
        </main>
    );
}
