import { type JSX, useRef, type FormEvent } from "react";

import "./login.css";

function Login(): JSX.Element {
    const mailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault(); // Éviter le comportement par défaut de submit
        const mail = mailRef.current?.value;
        const password = passwordRef.current?.value;
        // appelle API
        console.log(`${mail} / ${password}`);
    };

    return (
        <main id="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        Email
                        <input
                            type="email"
                            placeholder="Entrez une adresse email"
                            required
                            ref={mailRef}
                        />
                    </label>
                    <label>
                        Mot de passe
                        <input
                            type="password"
                            placeholder="Entrez un mot de passe"
                            required
                            ref={passwordRef}
                        />
                    </label>

                    <input type="submit" value="Se connecter" />
                </fieldset>
            </form>
        </main>
    );
}

export default Login;
