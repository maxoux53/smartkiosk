import { useState, type JSX, type ChangeEvent } from "react";

import "./login.css";

function Login(): JSX.Element {
    const [mail, setMail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

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
                            value={mail}
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
                            value={password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </label>

                    <input type="submit" value="Se connecter" />
                </fieldset>
            </form>
        </main>
    );
}

export default Login;
