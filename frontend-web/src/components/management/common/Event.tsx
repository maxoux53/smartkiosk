import { useEffect, useState, type FormEvent, type JSX } from "react";
import type { event } from "../../../type";
import "../management.css";
import Header from "../../other/Header";

export default function Event({ data, actionButton }: { data?: Promise<event | undefined>; actionButton: (event: event) => Promise<void>; }): JSX.Element {
    const [event, setEvent] = useState<event | null>();
        
        useEffect(() => {
            Promise.resolve(data).then((resolvedData) => {
                setEvent(resolvedData);
            });
        }, [data]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newEvent: event = {
            id: event?.id ?? -1,
            name: formData.get("name") as string,
            location: formData.get("location") as string,
            is_active: formData.get("is_active") === "on",
            image: null, // appelle API pour le code
            iban: formData.get("iban") as string
        };
        console.log(newEvent);

        actionButton(newEvent);
    };

    return (
        <>
            <Header
                title={data ? "Modifier un évènement" : "Ajouter un évènement"}
                hasBackButton={true}
            />
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        ID
                        <input
                            type="text"
                            defaultValue={event?.id}
                            placeholder="L'Id est généré automatiquement !"
                            disabled
                        />
                    </label>
                    <label>
                        Nom
                        <input
                            name="name"
                            type="text"
                            defaultValue={event?.name}
                            placeholder="Exemple: Summer Festival"
                            required
                        />
                    </label>
                    <label>
                        Lieu
                        <input
                            name="location"
                            type="text"
                            defaultValue={event?.location}
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
                            defaultChecked={event ? event.is_active : true}
                            disabled={data === undefined}
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
                            defaultValue={event?.iban}
                            placeholder="Exemple: BE7612345678901234567890123"
                            required
                        />
                    </label>
                </fieldset>
                <button type="submit">{data ? "Modifier" : "Ajouter"}</button>
            </form>
        </>
    );
}
