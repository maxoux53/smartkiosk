import { useState, type JSX, type ChangeEvent } from "react";

import "./login.css";

function Login(): JSX.Element {
    const [mail, setMail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [connectionMessage, setConnectionMessage] = useState<string>("");

    function login(): void {
        console.log("test");
        if (mail === "test" && password === "mdp") {
            setConnectionMessage("Connexion réussie");
        } else {
            setConnectionMessage("Connexion échouée");
        }
    }

    return (
        <main id="login">
            <h1>Login</h1>
            <form>
                <fieldset>
                    <label>
                        Email
                        <input
                            type="email"
                            placeholder="Entrez une adresse email"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setMail(e.target.value);
                            }}
                        />
                    </label>
                    <label>
                        Mot de passe
                        <input
                            type="password"
                            placeholder="Entrez un mot de passe"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </label>

                    <input type="submit" value="Se connecter" />
                </fieldset>
            </form>

            {connectionMessage}
        </main>
    );
}

export default Login;
