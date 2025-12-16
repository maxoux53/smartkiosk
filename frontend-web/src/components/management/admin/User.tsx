import { type FormEvent, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import type { user } from "../../../type";
import "../management.css";

export default function User({ data, actionButton }: { data?: user; actionButton: (user?: user) => void; }): JSX.Element {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newUser: user = {
            id: data?.id ?? -1,
            first_name: formData.get("first_name") as string,
            last_name: formData.get("last_name") as string,
            email: formData.get("email") as string,
            avatar: null,
            is_admin: formData.get("is_admin") === "on"
        };

        actionButton(newUser);
    };

    const navigate = useNavigate();

    return (
        <main>
            <div id="title">
                <button
                    type="button"
                    onClick={(): void | Promise<void> => navigate(-1)}
                >
                    &lt;
                </button>
                <h1>
                    {data ?
                        "Modifier un utilisateur"
                    :   "Ajouter un utilisateur"}
                </h1>
            </div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        ID
                        <input
                            type="text"
                            defaultValue={data?.id}
                            placeholder="L'Id est généré automatiquement !"
                            disabled
                        />
                    </label>
                    <label>
                        Prénom
                        <input
                            name="first_name"
                            type="text"
                            defaultValue={data?.first_name}
                            placeholder="Exemple: Jean"
                            required
                        />
                    </label>
                    <label>
                        Nom de famille
                        <input
                            name="last_name"
                            type="text"
                            defaultValue={data?.last_name}
                            placeholder="Exemple: Dupont"
                            required
                        />
                    </label>
                    <label>
                        Email
                        <input
                            name="email"
                            type="email"
                            defaultValue={data?.email}
                            placeholder="Exemple: jean.dupont@mail.com"
                            required
                        />
                    </label>
                    <label>
                        Mot de passe
                        <input
                            name="password"
                            type="text"
                            placeholder="Exemple: JeanJean12345"
                            required
                        />
                    </label>
                    <label>
                        Avatar
                        <input
                            type="file" // Mettre en place cloudflare lorsqu'on sera connecté à l'API
                        />
                    </label>
                    <label>
                        Administrateur
                        <input
                            name="is_admin"
                            type="checkbox"
                            role="switch"
                            defaultChecked={data?.is_admin}
                        />
                    </label>
                </fieldset>
                <button type="submit">{data ? "Modifier" : "Ajouter"}</button>
            </form>
        </main>
    );
}
