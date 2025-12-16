import type { JSX } from "react";
import Product from "../../components/table/manager/Product";
import TabBar from "../../components/TabBar";
import Cashier from "../../components/table/manager/Cashier";
import Event from "../../components/management/manager/Event";


export default function Manager(): JSX.Element {

    const sections: Record<string, JSX.Element> = {
        "Évènement": <Event/>,
        "Produits": <Product />,
        "Serveur": <Cashier/>
    };

    return (
        <main>
            <h1>Gérant d'évènements</h1>
            <TabBar sections={sections} />
        </main>
    )
}
