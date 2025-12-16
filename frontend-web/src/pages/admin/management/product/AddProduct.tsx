import { type JSX } from "react";
import ProductComponent from "../../../../components/management/common/Product";

export default function Product(): JSX.Element {
    return (
        <main>
            <ProductComponent
                actionButton={() => console.log("Modification BDD")}
                isAdmin={true}
            />
        </main>
    );
}

