import { type JSX } from "react";
import ProductComponent from "../../../../components/admin/management/Product";
//import { useParams } from "react-router-dom";
import type { product } from "../../../../type";

export default function Product(): JSX.Element {
    //const params = useParams();

    const product: product | null = null; // voir plus tard avec la requête à l'api avec l'id

    return product ?
            <ProductComponent
                data={product}
                actionButton={() => console.log("Modification BDD")}
            />
        :   <></>; // voir pour l'erreur avec l'api
}