import type { JSX } from "react";
import Product from "../../components/table/manager/Product";
import TabBar from "../../components/TabBar";

export default function Manager(): JSX.Element {

    const sections: Record<string, JSX.Element> = {
        "Produits": <Product />,
    };

    return (
        <main>
            <h1>Gérant d'évènements</h1>
            <TabBar sections={sections} />;
        </main>
    )
}
