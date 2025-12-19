import { useState, useEffect, type JSX, type Dispatch, type SetStateAction } from "react";

export default function ErrorModal({message, setErrorMessage}: {message: string; setErrorMessage: Dispatch<SetStateAction<string>> }): JSX.Element {
    const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

    useEffect(() => {
        setShowErrorModal(message !== "");
    }, [message]);

    return (
        showErrorModal ? (
            <dialog open>
                <article>
                    <header>Erreur</header>
                    <p>{message}</p>
                    <footer><button onClick={() => setErrorMessage("")}>Fermer</button></footer>
                </article>
            </dialog>
        ) :
        <></>
    )
}