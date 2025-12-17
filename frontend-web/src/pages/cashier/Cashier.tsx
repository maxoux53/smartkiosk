import type { JSX } from "react";
import TabBar from "../../components/other/TabBar";
import Purchase from "../../components/table/common/Purchase";
import Product from "../../components/table/cashier/Product";
import Disconnect from "../../components/other/Disconnect";
import "../common/roleHeader.css"


export default function Cashier(): JSX.Element {
    const sections: Record<string, JSX.Element> = {
        Produits: <Product />,
        Achats: <Purchase />
    };

    return (
        <main>
            <header className="header">
                <h1>Serveur</h1>
                <Disconnect/>
            </header>
            <TabBar sections={sections} />
        </main>
    );
}
