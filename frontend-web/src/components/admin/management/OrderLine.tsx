import { useState, type ChangeEvent, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import type { order_line } from "../../../type";
import "./management.css";

export default function OrderLine({
    data,
    actionButton
}: {
    data?: order_line;
    actionButton: () => void;
}): JSX.Element {
    const [orderLine, setOrderLine] = useState<order_line>(
        data ? data : (
            {
                product_id: 0,
                purchase_id: 0,
                quantity: 0,
                price: 0
            }
        )
    );

    const editOrderLine = (key: string, value: number) => {
        setOrderLine((prev: order_line) => ({ ...prev, [key]: value }));
    };

    const navigate = useNavigate();

    return (
        <main>
            <div id="title">
                <button
                    type="button"
                    onClick={(): void | Promise<void> => navigate("/admin")}
                >
                    &#60;
                </button>
                <h1>
                    {data ?
                        "Modifier une Ligne de Commande"
                    :   "Ajouter une Ligne de Commande"}
                </h1>
            </div>
            <form>
                <fieldset>
                    <label>
                        ID Produit
                        <input
                            type="number"
                            value={orderLine.product_id}
                            placeholder="Exemple: 1"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                editOrderLine(
                                    "product_id",
                                    parseInt(e.target.value)
                                )
                            }
                            required
                        />
                    </label>
                    <label>
                        ID Achat
                        <input
                            type="number"
                            value={orderLine.purchase_id}
                            placeholder="Exemple: 1"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                editOrderLine(
                                    "purchase_id",
                                    parseInt(e.target.value)
                                )
                            }
                            required
                        />
                    </label>
                    <label>
                        Quantité
                        <input
                            type="number"
                            value={orderLine.quantity}
                            placeholder="Exemple: 2"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                editOrderLine(
                                    "quantity",
                                    parseInt(e.target.value)
                                )
                            }
                            required
                        />
                    </label>
                    <label>
                        Prix
                        <input
                            type="number"
                            step="0.01"
                            value={orderLine.price}
                            placeholder="Exemple: 10.50"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                editOrderLine(
                                    "price",
                                    parseFloat(e.target.value)
                                )
                            }
                            required
                        />
                    </label>
                </fieldset>
                <button type="submit" onClick={actionButton}>
                    {data ? "Modifier" : "Ajouter"}
                </button>
            </form>
        </main>
    );
}
