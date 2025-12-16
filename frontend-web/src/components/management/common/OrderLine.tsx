import { type FormEvent, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import type { order_line } from "../../../type";
import "../management.css";

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

    const navigate = useNavigate();

    return (
        <main>
            <div id="title">
                <button
                    type="button"
                    onClick={(): void | Promise<void> => navigate(-1)}
                >
                    &#60;
                </button>
                <h1>
                    {data ?
                        "Modifier une Ligne de Commande"
                    :   "Ajouter une Ligne de Commande"}
                </h1>
            </div>
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
                <button type="submit">
                    {data ? "Modifier" : "Ajouter"}
                </button>
            </form>
        </main>
    );
}
