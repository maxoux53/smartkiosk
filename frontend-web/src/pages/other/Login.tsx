import { type JSX, useRef, type FormEvent, useState } from "react";

import "./login.css";
import { useNavigate } from "react-router-dom";
import { connect } from "../../API/connect";
import * as cookie from 'cookie'; 
import { checkIsAdmin } from "../../API/auth";
import { useModal } from "../../contexts/ModalContext";

type res = {
    token?: string
}

function Login(): JSX.Element {
    const {setTitle, openModal, setMessage} = useModal();
    const mailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const mail = mailRef.current?.value;
        const password = passwordRef.current?.value;
        try {
            const res: res = await connect("/login", "POST", {
                email: mail,
                password: password
            })
            
            if (res.token) {
                document.cookie = cookie.serialize('token', res.token, {
                    path: '/',        
                    maxAge: 60 * 60 * 8,
                    sameSite: 'strict'  
                });
            }
            const isAdmin = await checkIsAdmin();
            if (isAdmin) {
                navigate("/admin");
            } else {
                setTitle("Erreur")
                setMessage("Vous n'avez de droits administrateur !");
                openModal();
            }
        } catch (e) {
            setTitle("Erreur")
            setMessage(String(e));
            openModal();
        }
        
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
