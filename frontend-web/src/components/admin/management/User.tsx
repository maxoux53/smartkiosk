import { useState, type FormEvent, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import type { user } from "../../../type";
import "./management.css";

export default function User({ data, actionButton }: { data?: user; actionButton: (user?: user) => void; }): JSX.Element {
    const [isDeleted, setIsDeleted] = useState<boolean>(data ? (data.deletion_date !== null) : false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);

        const newUser: user = {
            id: data?.id ?? -1,
            first_name: formData.get("first_name") as string,
            last_name: formData.get("last_name") as string,
            email: formData.get("email") as string,
            password: formData.get("password") as string,
            avatar: null,
            is_admin: formData.get("is_admin") === "on",
            deletion_date: formData.get("deletion_date") ? new Date(formData.get("deletion_date") as string) : null
        };

        actionButton(newUser);
    };

    const navigate = useNavigate();

    return (
        <main>
            <div id="title">
                <button
                    type="button"
                    onClick={(): void | Promise<void> => navigate("/admin")}
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
                            defaultValue={data?.password}
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
                    <label>
                        Date de suppression
                        <input
                            type="checkbox"
                            role="switch"
                            checked={isDeleted}
                            onChange={(e) => setIsDeleted(e.target.checked)}
                        />
                        <input
                            name="deletion_date"
                            type="date"
                            defaultValue={
                                data?.deletion_date ?
                                    data.deletion_date
                                        .toDateString()
                                :   ""
                            }
                            disabled={!isDeleted}
                        />
                    </label>
                </fieldset>
                <button type="submit">
                    {data ? "Modifier" : "Ajouter"}
                </button>
            </form>
        </main>
    );
}
