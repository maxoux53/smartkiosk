import { type FormEvent, type JSX } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { product } from "../../../type";
import "../management.css";
import Header from "../../other/Header";

export default function Product({ data, actionButton, isAdmin }: { data?: product; actionButton: (product?: product) => void; isAdmin: boolean;}): JSX.Element {
    const params = useParams();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newProduct = {
            id: data?.id ?? -1,
            label: formData.get("label") as string,
            is_available: formData.get("is_available") === "on",
            excl_vat_price: formData.get("excl_vat_price") as string,
            picture: null,
            category_id: Number(formData.get("category_id")),
            event_id: Number(formData.get("event_id"))
        };

        actionButton(newProduct);
    };

    const navigate = useNavigate();

    return (
        <>
            <Header title={data ? "Modifier un produit" : "Ajouter un produit"} hasBackButton={true}/>
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
                            defaultValue={params.eventId ?? data?.event_id ?? "" }
                            placeholder="Exemple: 1"
                            min="0"
                            required
                            disabled={params.eventId !== undefined || data !== undefined}
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
                </fieldset>
                <button type="submit">{data ? "Modifier" : "Ajouter"}</button>
            </form>
        </>
    );
}
