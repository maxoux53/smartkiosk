import { useState, type ChangeEvent, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import type { membership } from "../../../type";
import "./management.css";

export default function Membership({
    data,
    actionButton
}: {
    data?: membership;
    actionButton: () => void;
}): JSX.Element {
    const [membership, setMembership] = useState<membership>(
        data ? data : (
            {
                user_id: 0,
                event_id: 0,
                role: ""
            }
        )
    );

    const editMembership = (key: string, value: string | number) => {
        setMembership((prev: membership) => ({ ...prev, [key]: value }));
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
                <h1>
                    {data ?
                        "Modifier une Participation"
                    :   "Ajouter une Participation"}
                </h1>
            </div>
            <fieldset>
                <label>
                    ID utilisateur
                    <input
                        type="number"
                        value={membership.user_id}
                        placeholder="Exemple: 1"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            editMembership("user_id", parseInt(e.target.value))
                        }
                    />
                </label>
                <label>
                    ID évènement
                    <input
                        type="number"
                        value={membership.event_id}
                        placeholder="Exemple: 1"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            editMembership("event_id", parseInt(e.target.value))
                        }
                    />
                </label>
                <label>
                    Rôle
                    <select
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                            editMembership("role", e.target.value)
                        }
                    >
                        <option selected disabled value="">
                            Choisir un rôle...
                        </option>
                        <option value="host">Gérant</option>
                        <option value="cashier">Serveur</option>
                        <option value="guest">Invité</option>
                    </select>
                </label>
            </fieldset>
            <button type="button" onClick={actionButton}>
                {data ? "Modifier" : "Ajouter"}
            </button>
        </main>
    );
}
