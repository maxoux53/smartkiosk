import type { JSX } from "react";
import EventManagement from "../common/Event";
import type { event } from "../../../type";

export default function Event(): JSX.Element {
    const event: event = { // appel API
        id: 42,
        name: "Festival SmartKiosk 2025",
        location: "Liège",
        is_active: true,
        image: null,
        iban: "BE71096123456769",
    };

    const handleSubmit = (): void => {
        // Intentionnellement vide: donnée de test (appel API)
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>
                    ID
                    <input
                        type="text"
                        defaultValue={event.id}
                        placeholder="L'Id est généré automatiquement !"
                        disabled
                    />
                </label>
                <label>
                    Nom
                    <input
                        name="name"
                        type="text"
                        defaultValue={event.name}
                        placeholder="Exemple: Summer Festival"
                        required
                    />
                </label>
                <label>
                    Lieu
                    <input
                        name="location"
                        type="text"
                        defaultValue={event.location}
                        placeholder="Exemple: Paris"
                        required
                    />
                </label>
                <label>
                    Actif
                    <input
                        name="is_active"
                        className="switch"
                        type="checkbox"
                        role="switch"
                        defaultChecked={event.is_active}
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
                        name="iban"
                        type="text"
                        defaultValue={event.iban}
                        placeholder="Exemple: BE7612345678901234567890123"
                        required
                    />
                </label>
            </fieldset>
            <button type="submit">
                Modifier
            </button>
        </form>
    )
}