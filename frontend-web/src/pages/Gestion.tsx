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
                <NavButton name={TABLES.MEMBERSHIPS}></NavButton>
                <NavButton name={TABLES.EVENTS}></NavButton>
                <NavButton name={TABLES.PURCHASES}></NavButton>
                <NavButton name={TABLES.ORDER_LINES}></NavButton>
                <NavButton name={TABLES.PRODUCTS}></NavButton>
                <NavButton name={TABLES.CATEGORIES}></NavButton>
                <NavButton name={TABLES.VATS}></NavButton>
            </div>

            <div id="body">
                
            </div>

            <div id="footer">

            </div>
            
        </main>
    )
}

export default Gestion