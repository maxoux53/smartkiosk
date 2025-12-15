import { useState, type FormEvent, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import type { product } from "../../../type";
import "./management.css";

export default function Product({ data, actionButton }: { data?: product; actionButton: (product?: product) => void; }): JSX.Element {
    const [isDeleted, setIsDeleted] = useState<boolean>(data ? (data.deletion_date !== null) : false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);

        const newProduct: product = {
            id: data?.id ?? -1,
            label: formData.get("label") as string,
            is_available: formData.get("is_available") === "on",
            excl_vat_price: formData.get("excl_vat_price") as string,
            deletion_date: formData.get("deletion_date") ? new Date(formData.get("deletion_date") as string) : null,
            picture: null,
            category_id: Number(formData.get("category_id")),
            event_id: Number(formData.get("event_id"))
        };

        actionButton(newProduct);
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
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        ID
                        <input
                            type="text"
                            defaultValue={data?.id}
                            placeholder="L'Id est généré automatiquement !"
                            disabled
                        />
                    </label>
                    <label>
                        Libellé
                        <input
                            name="label"
                            type="text"
                            defaultValue={data?.label}
                            placeholder="Exemple: Coca-Cola"
                            required
                        />
                    </label>
                    <label>
                        Prix HTVA
                        <input
                            name="excl_vat_price"
                            type="number"
                            defaultValue={data?.excl_vat_price}
                            placeholder="Exemple: 2.50"
                            min="0.01"
                            step="0.01"
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
                            name="category_id"
                            type="number"
                            defaultValue={data?.category_id}
                            placeholder="Exemple: 1"
                            min="0"
                            required
                        />
                    </label>
                    <label>
                        ID Événement
                        <input
                            name="event_id"
                            type="number"
                            defaultValue={data?.event_id ?? ""}
                            placeholder="Exemple: 1 (optionnel)"
                            min="0"
                        />
                    </label>
                    <label>
                        Disponible
                        <input
                            name="is_available"
                            className="switch"
                            type="checkbox"
                            role="switch"
                            defaultChecked={data?.is_available}
                        />
                    </label>
                    <label>
                        Date de suppression
                        <input
                            className="switch"
                            type="checkbox"
                            role="switch"
                            checked={isDeleted}
                            onChange={(e) => setIsDeleted(e.target.checked)}
                        />
                        <input
                            name="deletion_date"
                            type="date"
                            defaultValue={
                                data?.deletion_date ?
                                    data.deletion_date
                                        .toDateString()
                                :   ""
                            }
                            disabled={!isDeleted}
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
