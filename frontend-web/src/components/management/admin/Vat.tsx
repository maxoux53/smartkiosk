import { type FormEvent, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import type { vat } from "../../../type";
import "../management.css";

export default function Vat({data, actionButton}: {data?: vat; actionButton: (vat?: vat) => void;}): JSX.Element {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newVat: vat = {
            type: formData.get("type") as string,
            rate: Number(formData.get("rate"))
        };

        actionButton(newVat);
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
                </fieldset>
                <button type="submit">{data ? "Modifier" : "Ajouter"}</button>
            </form>
        </main>
    );
}
