import type { JSX } from "react";

import Gestion from "../components/Gestion";
import NavButton from "../components/NavButton";

import { MANAGER_TABLES } from "../constant";

function EventManager(): JSX.Element {
    const navButtons: JSX.Element[] = [];
    navButtons.push(<NavButton name={MANAGER_TABLES.EVENT}></NavButton>)
    navButtons.push(<NavButton name={MANAGER_TABLES.USERS}></NavButton>)
    navButtons.push(<NavButton name={MANAGER_TABLES.MEMBERSHIPS}></NavButton>)

    return (
        <main id="eventManager">
            <Gestion roleName="Manager" navButtons={navButtons}></Gestion>
        </main>
    );
}

export default EventManager;