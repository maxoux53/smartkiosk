import { useMemo, type JSX } from "react";
import User from "../../../../components/management/admin/User";
import type { user } from "../../../../type";
import { useModal } from "../../../../contexts/ModalContext";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "../../../../API/connect";

export default function EditUser(): JSX.Element {
    const {setTitle, openModal, setMessage} = useModal();
    const navigate = useNavigate();
    const params = useParams();

    if (!params.id) {
        setTitle("Erreur");
        setMessage("L'id de l'utilisateur n'est pas trouvé");
        openModal();
        navigate(-1);
    }

    const userFetch: Promise<user | undefined> = useMemo(
        async () => {
            try {
                return await connect(`/interact/user/${params.id}`, "GET");
            } catch (e) {
                setTitle("Erreur");
                setMessage(String(e));
                openModal();
            }
        },[]
    )


    return (
        <main>
            {userFetch ?
                <User
                    data={userFetch}
                    actionButton={async (user) => {
                        try {
                            await connect(`/interact/user/${user.id}`, "PATCH", {
                                first_name: user.first_name,
                                last_name: user.last_name,
                                email: user.email,
                                iban: user.password ?? null,
                                image: "12345",
                                is_admin: user.is_admin
                            })
                            setTitle("Édition d'un utilisateur");
                            setMessage("Utilisateur modifié avec succès");
                            openModal();
                            navigate(-1)
                        } catch (e) {
                            setTitle("Erreur");
                            setMessage(String(e));
                            openModal();
                        }
                    }}
                />
            :   <></>}
        </main>
    );
}
