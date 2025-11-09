import type { JSX } from "react";

function NavButton({ name }: { name: string }): JSX.Element {
    return (
        <>
            <button>{name}</button>
        </>
    );
}

export default NavButton;
