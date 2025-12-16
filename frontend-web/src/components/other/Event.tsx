import type { JSX } from "react";
import "./event.css";
import { useNavigate } from "react-router-dom";

function Event({ name, imagePath, roleName, eventId }: { name: string; imagePath: string; roleName: string; eventId: number}): JSX.Element {
    const navigate = useNavigate();
    
    return (
        <article
            className="event-card"
            onClick={() => {
                navigate(`/${roleName}/event/${eventId}`)
            }}
        >
            <img className="event-logo" src={imagePath} alt={name} />
            <p className="event-name">{name}</p>
            <p className="event-role">{roleName}</p>
        </article>
    );
}

export default Event;
