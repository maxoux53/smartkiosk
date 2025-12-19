import { useMemo, type JSX } from "react";
import Category from "../../../../components/management/admin/Category";
import type { category } from "../../../../type";
import { useNavigate, useParams } from "react-router-dom";
import { useModal } from "../../../../contexts/ModalContext";
import { connect } from "../../../../API/connect";

export default function EditCategory(): JSX.Element {
    const {setTitle, openModal, setMessage} = useModal();
    const navigate = useNavigate();
    const params = useParams();

    if (!params.id) {
        setTitle("Erreur");
        setMessage("L'id de la catégorie n'est pas trouvé");
        openModal();
        navigate(-1);
    }

    const categoryFetch: Promise<category | undefined> = useMemo(
        async () => {
            try {
                return await connect(`/interact/category/${params.id}`, "GET");
            } catch (e) {
                setTitle("Erreur");
                setMessage(String(e));
                openModal();
            }
        },[]
    )

    return (
        <main>
            {categoryFetch ?
                <Category
                    data={categoryFetch}
                    actionButton={async (category) => {
                        try {
                            await connect(`/interact/category/${category.id}`, "PATCH", {
                                label: category.label,
                                vat_type: category.vat_type
                            })
                            setTitle("Édition d'une catégorie");
                            setMessage("Catégorie modifiée avec succès");
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
