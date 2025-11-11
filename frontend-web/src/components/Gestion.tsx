import type { JSX } from "react";
import Table from "./Table";

function Gestion({roleName, navButtons}: {roleName: string, navButtons: JSX.Element[]}): JSX.Element {
    return (
        <main id="admin">
            <div id="header">
                <h1>{roleName}</h1>
            </div>

            <div id="navBar">
                {navButtons.map((button) => (
                    button
                ))}
            </div>

            <div id="table">
                <Table></Table>
            </div>

            <div id="footer"></div>
        </main>
    );
}

export default Gestion;