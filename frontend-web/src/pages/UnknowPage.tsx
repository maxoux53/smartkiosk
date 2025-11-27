import type { JSX } from "react";
import { Link } from "react-router-dom";

export default function UnknowPage(): JSX.Element {
    return (
        <main>
            <h1>Erreur 404</h1>
            <p>Page Inconnue</p>
            <Link to="/">Retourner à la page principale</Link>
        </main>
    );
}