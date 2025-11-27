import { useState, type ChangeEvent, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import type { vat } from "../../../type";
import "./management.css";

export default function Vat({
    data,
    actionButton
}: {
    data?: vat;
    actionButton: () => void;
}): JSX.Element {
    const [vat, setVat] = useState<vat>(
        data ? data : (
            {
                type: "",
                rate: 0,
                deletion_date: null
            }
        )
    );

    const editVat = (key: string, value: string | number | null) => {
        setVat((prev: vat) => ({ ...prev, [key]: value }));
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
            <form>
                <fieldset>
                    <label>
                        Type
                        <input
                            type="text"
                            value={vat.type}
                            placeholder="Exemple: Standard"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                editVat("type", e.target.value)
                            }
                            required
                        />
                    </label>
                    <label>
                        Taux (%)
                        <input
                            type="number"
                            step="0.1"
                            value={vat.rate}
                            placeholder="Exemple: 20.0"
                            min="0"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                editVat("rate", parseFloat(e.target.value))
                            }
                            required
                        />
                    </label>
                    <label>
                        Date de suppression
                        <input
                            className="switch"
                            type="checkbox"
                            role="switch"
                            checked={vat.deletion_date ? true : false}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                editVat(
                                    "deletion_date",
                                    e.target.checked ?
                                        new Date().toISOString()
                                    :   null
                                )
                            }
                        />
                        {vat.deletion_date !== null ?
                            <input
                                type="date"
                                value={vat.deletion_date}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setVat((prev: vat) => ({
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
