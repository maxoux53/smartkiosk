import { type FormEvent, type JSX } from "react";
import type { order_line } from "../../../type";
import "../management.css";
import Header from "../../other/Header";

export default function OrderLine({ data, actionButton }: { data?: order_line; actionButton: (orderLine?: order_line) => void; }): JSX.Element {
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newOrderLine: order_line = {
            product_id: Number(formData.get("product_id")),
            purchase_id: Number(formData.get("purchase_id")),
            quantity: Number(formData.get("quantity")),
            price: Number(formData.get("price"))
        };

        actionButton(newOrderLine);
    };

    return (
        <>
            <Header
                title={
                    data ?
                        "Modifier une ligne de commande"
                    :   "Ajouter une ligne de commande"
                }
                hasBackButton={true}
            />
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        ID Produit
                        <input
                            name="product_id"
                            type="number"
                            defaultValue={data?.product_id}
                            placeholder="Exemple: 1"
                            min="0"
                            required
                        />
                    </label>
                    <label>
                        ID Achat
                        <input
                            name="purchase_id"
                            type="number"
                            defaultValue={data?.purchase_id}
                            placeholder="Exemple: 1"
                            min="0"
                            required
                        />
                    </label>
                    <label>
                        Quantité
                        <input
                            name="quantity"
                            type="number"
                            defaultValue={data?.quantity}
                            placeholder="Exemple: 2"
                            min="1"
                            required
                        />
                    </label>
                    <label>
                        Prix
                        <input
                            name="price"
                            type="number"
                            step="0.01"
                            defaultValue={data?.price}
                            placeholder="Exemple: 10.50"
                            min="0.01"
                            required
                        />
                    </label>
                </fieldset>
                <button type="submit">{data ? "Modifier" : "Ajouter"}</button>
            </form>
        </>
    );
}
