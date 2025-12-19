import { type JSX } from "react";
import Category from "../../../../components/management/admin/Category";
import type { category } from "../../../../type";
import { connect } from "../../../../API/connect";
import { useModal } from "../../../../contexts/ModalContext";
import { useNavigate } from "react-router-dom";

export default function AddCategory(): JSX.Element {
    const navigate = useNavigate();
    const {setTitle, openModal, setMessage} = useModal();

    return (
        <main>
            <Category actionButton={async (category: category) => {
                try {
                    await connect("/interact/category/", "POST", {
                        label: category.label,
                        vat_type: category.vat_type,
                        picture: "12345"
                    })
                    setTitle("Création catégorie");
                    setMessage("Catégorie ajoutée avec succès");
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
