import { useState, type JSX } from "react";
import { useNavigate } from "react-router-dom";

export default function Disconnect(): JSX.Element {
    const [showDisconnectModal, setShowDisconnectModal] = useState<boolean>(false);
    const navigate = useNavigate();

    return (
        <>
            <button type="button" onClick={() => setShowDisconnectModal(true)}>
                Se déconnecter
            </button>
            {showDisconnectModal ?
                <dialog open>
                    <article>
                        <header>Se déconnecter</header>
                        <p>Voulez-vous vraiment vous déconnecter ?</p>
                        <footer>
                            <button
                                type="button"
                                onClick={() => navigate("/login")}
                            >
                                Oui
                            </button>
                            <button
                                type="button"
                                className="secondary"
                                onClick={() => setShowDisconnectModal(false)}
                            >
                                Non
                            </button>
                        </footer>
                    </article>
                </dialog>
            :   <></>}
        </>
    );
}
