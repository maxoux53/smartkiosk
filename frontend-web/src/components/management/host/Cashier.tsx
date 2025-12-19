import type { FormEvent, JSX } from "react";
import { useNavigate } from "react-router-dom";
import "../management.css";
import Header from "../../other/Header";

export default function Cashier(): JSX.Element {
    const navigate = useNavigate();

    return (
        <>
            <Header title="Ajouter un serveur" hasBackButton={true}/>
            <form
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                    console.log(e);
                }}
            >
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
    );
}
