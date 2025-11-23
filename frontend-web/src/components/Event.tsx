import type { JSX } from "react";

function Event({
    name,
    imagePath
}: {
    name: string;
    imagePath: string;
}): JSX.Element {
    return (
        <div
            onClick={() => {
                console.log("test");
            }}
        >
            <img src={imagePath} alt={name} />
            <p>{name}</p>
        </div>
    );
}

export default Event;
