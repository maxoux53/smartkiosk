import type { JSX } from "react"
import NavButton from "../components/navButton"

import { TABLES } from "../constant"

function Gestion(): JSX.Element {
    const role: string = "Administrateur" // Accès à la base de donnée


    return (
        <main className="gestion">
            <div id="header">
                <h1>{role}</h1>
                <button>Account</button>
            </div>
                
            <div id="navBar">
                <NavButton name={TABLES.USERS}></NavButton>
            </div>

            <div id="body">
                
            </div>

            <div id="footer">

            </div>
            
        </main>
    )
}

export default Gestion