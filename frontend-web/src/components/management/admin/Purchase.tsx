import { type FormEvent, type JSX } from "react";
import type { purchase } from "../../../type";
import "../management.css";
import Header from "../../other/Header";

export default function Purchase({ data, actionButton }: { data?: purchase; actionButton: (purchase?: purchase) => void; }): JSX.Element {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newPurchase: purchase = {
            id: data?.id ?? -1,
            date: new Date(formData.get("date") as string),
            user_id: Number(formData.get("user_id"))
        };

        actionButton(newPurchase);
    };

    return (
        <>
            <Header title={data ? "Modifier un achat" : "Ajouter un achat"} hasBackButton={true}/>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        ID
                        <input
                            type="text"
                            value={data?.id}
                            placeholder="L'Id est généré automatiquement !"
                            disabled
                        />
                    </label>
                    <label>
                        Date
                        <input
                            name="date"
                            type="date"
                            value={data?.date.toISOString().split("T")[0]}
                            required
                        />
                    </label>
                    <label>
                        ID Utilisateur
                        <input
                            name="user_id"
                            type="number"
                            value={data?.user_id}
                            placeholder="Exemple: 1"
                            min="0"
                            required
                        />
                    </label>
                </fieldset>
                <button type="submit">{data ? "Modifier" : "Ajouter"}</button>
            </form>
        </>
    );
}
