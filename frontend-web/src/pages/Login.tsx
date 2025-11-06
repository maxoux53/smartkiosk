import type { JSX } from "react";
import { useState } from "react";

function Login(): JSX.Element {
    const [mail, setMail] = useState<string>("");
        const [password, setPassword] = useState<string>("");
        const [connectionMessage, setConnectionMessage] = useState<string>("");
    
        function login(): void {
            console.log("test")
            if (mail === "test" && password === "mdp"){
                setConnectionMessage("Connexion réussie");
            } else {
                setConnectionMessage("Connexion échouée");
            }
        }
    
        return (
            <main className="login">
                <h1>Login</h1>
                <form>
                    <label>Email
                        <input type="email" placeholder="Entrez une adresse email" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setMail(e.target.value)}}/>
                    </label>
                    <label>Mot de passe
                        <input type="password" placeholder="Entrez un mot de passe" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value)}}/>
                    </label>
                    
                    <input type="submit" value="Se connecter"/>
                </form>
                
                {connectionMessage}
            </main>
        )
}

export default Login;