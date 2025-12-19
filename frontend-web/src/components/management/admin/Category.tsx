import { type FormEvent, type JSX } from "react";
import type { category } from "../../../type";
import "../management.css";
import Header from "../../other/Header";

export default function Category({ data, actionButton }: { data?: category; actionButton: (category?: category) => void; }): JSX.Element {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newCategory: category = {
            id: data?.id ?? -1,
            label: formData.get("label") as string,
            vat_type: formData.get("vat_type") as string,
            picture: "" // appelle API
        };

        actionButton(newCategory);
    };

    return (
        <main>
            <Header title={data ? "Modifier une catégorie" : "Ajouter une catégorie"} hasBackButton={true}/>
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
                            placeholder="Exemple: Boissons"
                            required
                        />
                    </label>
                    <label>
                        Type TVA
                        <select
                            name="vat_type"
                            defaultValue={data?.vat_type ?? ""}
                            required
                        >
                            <option disabled value="">
                                Choisir un type de TVA...
                            </option>
                            <option value="A">21% (A)</option>
                            <option value="B">12% (B)</option>
                            <option value="C">6% (C)</option>
                            <option value="D">0% (D)</option>
                        </select>
                    </label>
                    <label>
                        Image
                        <input
                            type="file" // Mettre en place cloudflare lorsqu'on sera connecté à l'API
                        />
                    </label>
                </fieldset>
                <button type="submit">{data ? "Modifier" : "Ajouter"}</button>
            </form>
        </main>
    );
}
