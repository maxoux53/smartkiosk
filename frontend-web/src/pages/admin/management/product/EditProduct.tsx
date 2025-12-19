import { type JSX } from "react";
import Product from "../../../../components/management/common/Product";
//import { useParams } from "react-router-dom";
import type { product } from "../../../../type";

export default function EditProduct(): JSX.Element {
    //const params = useParams();

    const product: product | null = null; // voir plus tard avec la requête à l'api avec l'id

    return (
        <main>
            {product ?
                <Product
                    data={product}
                    actionButton={() => console.log("Modification BDD")}
                />
            :   <></>}
        </main>
    );
}
