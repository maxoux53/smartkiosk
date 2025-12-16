import type { JSX } from "react";
import Product from "../../components/table/manager/Product";
import TabBar from "../../components/other/TabBar";
import Cashier from "../../components/table/manager/Cashier";
import Event from "../../components/management/manager/Event";
import Purchase from "../../components/table/common/Purchase";


export default function Manager(): JSX.Element {

    const sections: Record<string, JSX.Element> = {
        "Évènement": <Event/>,
        "Produits": <Product />,
        "Serveur": <Cashier/>,
        "Achats": <Purchase/>
    };

    return (
        <main>
            <h1>Gérant d'évènements</h1>
            <TabBar sections={sections} />
        </main>
    )
}
