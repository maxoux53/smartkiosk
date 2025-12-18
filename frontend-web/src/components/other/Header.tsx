import type { JSX } from "react";
import Disconnect from "./Disconnect";
import "./header.css"

export default function Header({title} : {title: string}): JSX.Element {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Disconnect/>
        </header>
    )
}