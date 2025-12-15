import { type JSX } from "react";
import ProductComponent from "../../../../components/admin/management/Product";

export default function Product(): JSX.Element {
    return (
        <ProductComponent
            actionButton={() => console.log("Modification BDD")}
        />
    );
}
