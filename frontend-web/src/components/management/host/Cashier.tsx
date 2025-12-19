import type { FormEvent, JSX } from "react";
import "../management.css";
import Header from "../../other/Header";

export default function Cashier(): JSX.Element {

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
