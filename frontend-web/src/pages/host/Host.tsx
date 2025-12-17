import type { JSX } from "react";
import Product from "../../components/table/host/Product";
import TabBar from "../../components/other/TabBar";
import Cashier from "../../components/table/host/Cashier";
import Event from "../../components/management/host/Event";
import Purchase from "../../components/table/common/Purchase";
import Disconnect from "../../components/other/Disconnect";
import "../common/roleHeader.css"


export default function Host(): JSX.Element {
    const sections: Record<string, JSX.Element> = {
        Évènement: <Event />,
        Produits: <Product />,
        Serveur: <Cashier />,
        Achats: <Purchase />
    };

    return (
        <main>
            <header className="header">
                <h1>Gérant</h1>
                <Disconnect/>
            </header>
            <TabBar sections={sections} />
        </main>
    );
}
