import { type JSX } from "react";
import ProductComponent from "../../../components/admin/management/Product";
import { useLocation, type Location } from "react-router-dom";
import type { product } from "../../../type";

export default function Product(): JSX.Element {
    const location: Location = useLocation();

    const product: product = location.state?.product;

    return product ?
            <ProductComponent
                data={product}
                actionButton={() => console.log("Modification BDD")}
            />
        :   <ProductComponent actionButton={() => console.log("Ajout BDD")} />;
}
