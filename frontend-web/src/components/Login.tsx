import { use, useState } from "react";

function Login() {
    const [mail, setMail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [connectionMessage, setConnectionMessage] = useState<string>("");

    function login() {
        console.log("test")
        if (mail === "test" && password === "mdp"){
            setConnectionMessage("Connexion réussie");
        } else {
            setConnectionMessage("Connexion échouée");
        }
    }

    return (
        <>
            <p>Login</p>
            <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setMail(e.target.value)}}/>
            <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value)}}/>

            <button onClick={login}>Se connecter</button>
            {connectionMessage}
        </>
    )
}

export default Login;