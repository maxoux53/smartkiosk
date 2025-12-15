import { useState, type FormEvent, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import type { vat } from "../../../type";
import "./management.css";

export default function Vat({data, actionButton}: {data?: vat; actionButton: (vat?: vat) => void;}): JSX.Element {
    const [isDeleted, setIsDeleted] = useState<boolean>(data ? (data.deletion_date !== null) : false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);

        const newVat: vat = {
            type: formData.get("type") as string,
            rate: Number(formData.get("rate")),
            deletion_date: formData.get("deletion_date") ? new Date(formData.get("deletion_date") as string) : null
        };

        actionButton(newVat);
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
                <h1>{data ? "Modifier une TVA" : "Ajouter une TVA"}</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        Type
                        <input
                            name="type"
                            type="text"
                            defaultValue={data?.type}
                            placeholder="Exemple: Standard"
                            required
                        />
                    </label>
                    <label>
                        Taux (%)
                        <input
                            name="rate"
                            type="number"
                            step="1"
                            defaultValue={data?.rate}
                            placeholder="Exemple: 20.0"
                            min="0"
                            required
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
