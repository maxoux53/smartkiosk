import type { JSX } from "react";
import NavButton from "../components/NavButton";
import Table from "../components/Table";

import { TABLES } from "../constant";

function Gestion(): JSX.Element {
    const role: string = "Administrateur"; // Accès à la base de donnée

    return (
        <main className="gestion">
            <div id="header">
                <h1>{role}</h1>
            </div>

            <div id="navBar">
                {Object.entries(TABLES).map(([_, tablaName]) => {
                    return <NavButton name={tablaName}></NavButton>;
                })}
            </div>

            <div id="table">
                <Table></Table>
            </div>

            <div id="footer"></div>
        </main>
    );
}

export default Gestion;
