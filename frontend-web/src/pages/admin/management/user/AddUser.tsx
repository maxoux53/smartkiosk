import { type JSX } from "react";
import User from "../../../../components/management/admin/User";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../../../contexts/ModalContext";
import { connect } from "../../../../API/connect";
import type { user } from "../../../../type";

export default function AddUser(): JSX.Element {
    const navigate = useNavigate();
    const {setTitle, openModal, setMessage} = useModal();

    return (
        <main>
            <User actionButton={async (user: user) => {
                try {
                    await connect("/interact/user/", "POST", {
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email,
                        is_admin: user.is_admin,
                        avatar: "12345",
                        password: user.password
                    })
                    setTitle("Création utilisateur");
                    setMessage("Utilisateur ajouté avec succès");
                    openModal();
                    navigate(-1)
                } catch (e) {
                    setTitle("Erreur");
                    setMessage(String(e));
                    openModal();
                }
            }} />
        </main>
    );
}
