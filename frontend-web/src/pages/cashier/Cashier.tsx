import type { JSX } from "react";
import TabBar from "../../components/other/TabBar";
import Purchase from "../../components/table/common/Purchase";
import Product from "../../components/table/cashier/Product";

export default function Cashier(): JSX.Element {

    const sections: Record<string, JSX.Element> = {
        "Produits": <Product/>,
        "Achats": <Purchase />
    };

    return (
        <main>
            <h1>Serveur</h1>
            <TabBar sections={sections} />
        </main>
    )
}
