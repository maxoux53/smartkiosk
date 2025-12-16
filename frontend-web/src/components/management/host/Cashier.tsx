import type { FormEvent, JSX } from "react";
import { useNavigate } from "react-router-dom";
import '../management.css'

export default function Cashier(): JSX.Element {
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
                    Ajouter un Serveur
                </h1>
            </div>
            <form onSubmit={(e: FormEvent<HTMLFormElement>) => {console.log(e)}}>
                <fieldset>
                    <label>
                        Adresse email
                        <input
                            type="email"
                            placeholder="Exemple : jean.dupont@mail.com"
                            required
                        />
                    </label>
                    <button type="submit">Ajouter</button>
                </fieldset>
            </form>
        </>
    )
}