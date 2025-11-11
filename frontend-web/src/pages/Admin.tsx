import type { JSX } from "react";
import Gestion from "../components/Gestion"

import { ADMIN_TABLES } from "../constant";
import NavButton from "../components/NavButton";

function Admin(): JSX.Element {
    const navButtons: JSX.Element[] = [];
    navButtons.push(<NavButton name={ADMIN_TABLES.USERS}></NavButton>)
    navButtons.push(<NavButton name={ADMIN_TABLES.MEMBERSHIPS}></NavButton>)
    navButtons.push(<NavButton name={ADMIN_TABLES.EVENTS}></NavButton>)


    return (
        <main id="admin">
            <Gestion roleName="Administrateur" navButtons={navButtons}></Gestion>
        </main>
    );
}

export default Admin;
