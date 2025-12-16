import { type FormEvent, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import type { membership } from "../../../type";
import "../management.css";

export default function Membership({ data, actionButton }: { data?: membership; actionButton: (membership?: membership) => void; }): JSX.Element {
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        
        const newMembership: membership = {
            user_id: Number(formData.get("user_id")),
            event_id: Number(formData.get("event_id")),
            role: formData.get("role") as string
        };

        actionButton(newMembership);
    };

    const navigate = useNavigate();

    return (
        <>
            <div id="title">
                <button
                    type="button"
                    onClick={(): void | Promise<void> => navigate(-1)}
                >
                    &#60;
                </button>
                <h1>
                    {data ?
                        "Modifier une Participation"
                    :   "Ajouter une Participation"}
                </h1>
            </div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        ID utilisateur
                        <input
                            name="user_id"
                            type="number"
                            defaultValue={data?.user_id}
                            placeholder="Exemple: 1"
                            min="0"
                            required
                        />
                    </label>
                    <label>
                        ID évènement
                        <input
                            name="event_id"
                            type="number"
                            defaultValue={data?.event_id}
                            placeholder="Exemple: 1"
                            min="0"
                            required
                        />
                    </label>
                    <label>
                        Rôle
                        <select
                            name="role"
                            defaultValue={data?.role ?? ""}
                            required
                        >
                            <option disabled value="">
                                Choisir un rôle...
                            </option>
                            <option value="host">Gérant</option>
                            <option value="cashier">Serveur</option>
                            <option value="guest">Invité</option>
                        </select>
                    </label>
                </fieldset>
                <button type="submit">
                    {data ? "Modifier" : "Ajouter"}
                </button>
            </form>
        </>
    );
}
