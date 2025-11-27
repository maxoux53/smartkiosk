import { useState, type ChangeEvent, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import type { product } from "../../../type";
import "./management.css";

export default function Product({
    data,
    actionButton
}: {
    data?: product;
    actionButton: () => void;
}): JSX.Element {
    const [product, setProduct] = useState<product>(
        data ? data : (
            {
                id: -1,
                label: "",
                is_available: false,
                excl_vat_price: "",
                deletion_date: null,
                picture: null,
                category_id: 0,
                event_id: null
            }
        )
    );

    const editProduct = (
        key: string,
        value: string | number | boolean | null
    ) => {
        setProduct((prev: product) => ({ ...prev, [key]: value }));
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
                <h1>{data ? "Modifier un Produit" : "Ajouter un Produit"}</h1>
            </div>
            <form>
                <fieldset>
                    <label>
                        ID
                        <input
                            type="text"
                            value={product.id === -1 ? "" : product.id}
                            placeholder="L'Id est généré automatiquement !"
                            disabled
                        />
                    </label>
                    <label>
                        Libellé
                        <input
                            type="text"
                            value={product.label}
                            placeholder="Exemple: Coca-Cola"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                editProduct("label", e.target.value)
                            }
                            required
                        />
                    </label>
                    <label>
                        Prix HTVA
                        <input
                            type="number"
                            value={product.excl_vat_price}
                            placeholder="Exemple: 2.50"
                            min="0.01"
                            step="0.01"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                editProduct("excl_vat_price", e.target.value)
                            }
                            required
                        />
                    </label>
                    <label>
                        Image
                        <input
                            type="file" // Mettre en place cloudflare lorsqu'on sera connecté à l'API
                        />
                    </label>
                    <label>
                        ID Catégorie
                        <input
                            type="number"
                            value={product.category_id}
                            placeholder="Exemple: 1"
                            min="0"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                editProduct(
                                    "category_id",
                                    parseInt(e.target.value)
                                )
                            }
                            required
                        />
                    </label>
                    <label>
                        ID Événement
                        <input
                            type="number"
                            value={product.event_id || ""}
                            placeholder="Exemple: 1 (optionnel)"
                            min="0"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                editProduct(
                                    "event_id",
                                    e.target.value ?
                                        parseInt(e.target.value)
                                    :   null
                                )
                            }
                        />
                    </label>
                    <label>
                        Disponible
                        <input
                            className="switch"
                            type="checkbox"
                            role="switch"
                            checked={product.is_available}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                editProduct("is_available", e.target.checked)
                            }
                        />
                    </label>
                    <label>
                        Date de suppression
                        <input
                            className="switch"
                            type="checkbox"
                            role="switch"
                            checked={product.deletion_date ? true : false}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                editProduct(
                                    "deletion_date",
                                    e.target.checked ?
                                        new Date().toISOString()
                                    :   null
                                )
                            }
                        />
                        {product.deletion_date !== null ?
                            <input
                                type="date"
                                value={product.deletion_date}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setProduct((prev: product) => ({
                                        ...prev,
                                        deletion_date: e.target.value
                                    }))
                                }
                            />
                        :   <></>}
                    </label>
                </fieldset>
                <button type="submit" onClick={actionButton}>
                    {data ? "Modifier" : "Ajouter"}
                </button>
            </form>
        </main>
    );
}
