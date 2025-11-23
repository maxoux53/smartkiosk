import { useState, type ChangeEvent, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import type { category } from "../../../type";
import "./management.css";

export default function Category({
    data,
    actionButton
}: {
    data?: category;
    actionButton: () => void;
}): JSX.Element {
    const [category, setCategory] = useState<category>(
        data ? data : (
            {
                id: -1,
                label: "",
                vat_type: "",
                deletion_date: null,
                picture: ""
            }
        )
    );

    const editCategory = (key: string, value: string | null) => {
        setCategory((prev: category) => ({ ...prev, [key]: value }));
    };

    const navigate = useNavigate();

    return (
        <main>
            <div id="title"> 
                <button onClick={(): void | Promise<void> => navigate("/admin")}>&#60;</button>
                <h1>
                    {data ? "Modifier une Catégorie" : "Ajouter une Catégorie"}
                </h1>
            </div>
            <fieldset>
                <label>
                    ID
                    <input
                        type="text"
                        value={category.id === -1 ? "" : category.id}
                        placeholder="L'Id est généré automatiquement !"
                        disabled
                    />
                </label>
                <label>
                    Libellé
                    <input
                        type="text"
                        value={category.label}
                        placeholder="Exemple: Boissons"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            editCategory("label", e.target.value)
                        }
                    />
                </label>
                <label>
                    Type TVA
                    <select
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                            editCategory("vat_type", e.target.value)
                        }
                    >
                        <option selected disabled value="">
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
                <label>
                    Date de suppression
                    <input
                        className="switch"
                        type="checkbox"
                        role="switch"
                        checked={category.deletion_date ? true : false}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            editCategory(
                                "deletion_date",
                                e.target.checked ?
                                    new Date().toISOString()
                                :   null
                            )
                        }
                    />
                    {category.deletion_date !== null ?
                        <input
                            type="date"
                            value={category.deletion_date}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setCategory((prev: category) => ({
                                    ...prev,
                                    deletion_date: e.target.value
                                }))
                            }
                        />
                    :   <></>}
                </label>
            </fieldset>
            <button onClick={actionButton}>
                {data ? "Modifier" : "Ajouter"}
            </button>
        </main>
    );
}
