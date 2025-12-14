import { useState, type ChangeEvent, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import type { event } from "../../../type";
import "./management.css";

export default function Event({ data, actionButton }: { data?: event; actionButton: () => void; }): JSX.Element {
    const [event, setEvent] = useState<event>(
        data ? data : (
            {
                id: -1,
                name: "",
                location: "",
                is_active: false,
                image: null,
                iban: ""
            }
        )
    );

    const editEvent = (key: string, value: string | boolean) => {
        setEvent((prev: event) => ({ ...prev, [key]: value }));
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
                    {data ? "Modifier un Événement" : "Ajouter un Événement"}
                </h1>
            </div>
            <form>
                <fieldset>
                    <label>
                        ID
                        <input
                            type="text"
                            value={event.id === -1 ? "" : event.id}
                            placeholder="L'Id est généré automatiquement !"
                            disabled
                        />
                    </label>
                    <label>
                        Nom
                        <input
                            type="text"
                            value={event.name}
                            placeholder="Exemple: Summer Festival"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                editEvent("name", e.target.value)
                            }
                            required
                        />
                    </label>
                    <label>
                        Lieu
                        <input
                            type="text"
                            value={event.location}
                            placeholder="Exemple: Paris"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                editEvent("location", e.target.value)
                            }
                            required
                        />
                    </label>
                    <label>
                        Actif
                        <input
                            className="switch"
                            type="checkbox"
                            role="switch"
                            checked={event.is_active}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                editEvent("is_active", e.target.checked)
                            }
                        />
                    </label>
                    <label>
                        Image
                        <input
                            type="file" // Mettre en place cloudflare lorsqu'on sera connecté à l'API
                        />
                    </label>
                    <label>
                        IBAN
                        <input
                            type="text"
                            value={event.iban}
                            placeholder="Exemple: BE7612345678901234567890123"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                editEvent("iban", e.target.value)
                            }
                            required
                        />
                    </label>
                </fieldset>
                <button type="submit" onClick={actionButton}>
                    {data ? "Modifier" : "Ajouter"}
                </button>
            </form>
        </main>
    );
}
