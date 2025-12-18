import type { JSX } from "react";
import Disconnect from "./Disconnect";
import "./header.css";
import { useNavigate } from "react-router-dom";

export default function Header({ title, hasBackButton }: { title: string; hasBackButton: boolean }): JSX.Element {
    const navigate = useNavigate();

    return (
        <header className="header">
            <button
                type="button"
                disabled={!hasBackButton}
                onClick={() => navigate(-1)}
            >
                &#60;
            </button>
            <h1>{title}</h1>
            <Disconnect />
        </header>
    );
}
