import { useState, type ChangeEvent, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import type { user } from "../../../type";
import "./management.css";

export default function User({
    data,
    actionButton
}: {
    data?: user;
    actionButton: () => void;
}): JSX.Element {
    const [user, setUser] = useState<user>(
        data ? data : (
            {
                id: -1,
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                avatar: null,
                is_admin: false,
                deletion_date: null
            }
        )
    );

    const editUser = (key: string, value: string | boolean | Date | null) => {
        setUser((prev: user) => ({ ...prev, [key]: value }));
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
            <form>
                <fieldset>
                    <label>
                        ID
                        <input
                            type="text"
                            value={user.id === -1 ? "" : user.id}
                            placeholder="L'Id est généré automatiquement !"
                            disabled
                        />
                    </label>
                    <label>
                        Prénom
                        <input
                            type="text"
                            value={user.first_name}
                            placeholder="Exemple: Jean"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                editUser("first_name", e.target.value)
                            }
                            required
                        />
                    </label>
                    <label>
                        Nom de famille
                        <input
                            type="text"
                            value={user.last_name}
                            placeholder="Exemple: Dupont"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                editUser("last_name", e.target.value)
                            }
                            required
                        />
                    </label>
                    <label>
                        Email
                        <input
                            type="email"
                            value={user.email}
                            placeholder="Exemple: jean.dupont@mail.com"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                editUser("email", e.target.value)
                            }
                            required
                        />
                    </label>
                    <label>
                        Mot de passe
                        <input
                            type="text"
                            value={user.password}
                            placeholder="Exemple: JeanJean12345"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                editUser("password", e.target.value)
                            }
                            required
                        />
                    </label>
                    <label>
                        Avatar
                        <input
                            type="file" // Mettre en place cloudflare lorsqu'on sera connecté à l'API
                        />
                    </label>
                    <label id="switch">
                        Administrateur
                        <input
                            className="switch"
                            type="checkbox"
                            role="switch"
                            checked={user.is_admin}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                editUser("is_admin", e.target.checked)
                            }
                        />
                    </label>
                    <label id="switch">
                        Date de suppression
                        <input
                            className="switch"
                            type="checkbox"
                            role="switch"
                            checked={user.deletion_date !== null}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                editUser(
                                    "deletion_date",
                                    e.target.checked ?
                                        new Date(e.target.value)
                                    :   null
                                )
                            }
                        />
                        {user.deletion_date !== null ?
                            <input
                                type="date"
                                value={user.deletion_date.toDateString()}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    editUser("deletion_date", e.target.value)
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
