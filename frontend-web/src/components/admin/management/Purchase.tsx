import { useState, type ChangeEvent, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import type { purchase } from "../../../type";
import "./management.css";

export default function Purchase({
    data,
    actionButton
}: {
    data?: purchase;
    actionButton: () => void;
}): JSX.Element {
    const [purchase, setPurchase] = useState<purchase>(
        data ? data : (
            {
                id: -1,
                date: "",
                user_id: 0
            }
        )
    );

    const editPurchase = (key: string, value: string | number) => {
        setPurchase((prev: purchase) => ({ ...prev, [key]: value }));
    };

    const navigate = useNavigate();

    return (
        <main>
            <div id="title">
                <button onClick={(): void | Promise<void> => navigate("/admin")}>&#60;</button>
                <h1>{data ? "Modifier un Achat" : "Ajouter un Achat"}</h1>
            </div>
            <fieldset>
                <label>
                    ID
                    <input
                        type="text"
                        value={purchase.id === -1 ? "" : purchase.id}
                        placeholder="L'Id est généré automatiquement !"
                        disabled
                    />
                </label>
                <label>
                    Date
                    <input
                        type="date"
                        value={purchase.date}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            editPurchase("date", e.target.value)
                        }
                    />
                </label>
                <label>
                    ID Utilisateur
                    <input
                        type="number"
                        value={purchase.user_id}
                        placeholder="Exemple: 1"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            editPurchase("user_id", parseInt(e.target.value))
                        }
                    />
                </label>
            </fieldset>
            <button onClick={actionButton}>
                {data ? "Modifier" : "Ajouter"}
            </button>
        </main>
    );
}
