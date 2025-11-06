import type { JSX } from "react"

function Gestion(): JSX.Element {
    const role: string = "Administrateur" // Accès à la base de donnée


    return (
        <main className="gestion">
            <div id="header">
                <h1>{role}</h1>
                <button>Account</button>
            </div>
                
            <div id="navBar">

            </div>

            <div id="body">

            </div>

            <div id="footer">

            </div>
            
        </main>
    )
}

export default Gestion