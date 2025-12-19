import { useMemo, type JSX } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

import Edit from "../../table/Edit";
import { type event } from "../../../type";
import { connect } from "../../../API/connect";
import { useModal } from "../../../contexts/ModalContext";

export default function Event(): JSX.Element {
    const {setTitle, openModal, setMessage} = useModal();
    const navigate = useNavigate();

    const add = () => {
        navigate("event/add");
    };

    const edit = (row: event) => {
        navigate(`event/edit/${row.id}`);
    };

    const remove = async (row: event) => {
        try {
            await connect(`/interact/event/${row.id}`, "DELETE");
        } catch(e) {
            setTitle("Erreur");
            setMessage(String(e));
            openModal();
        }
    };

    const events: Promise<Array<event>> = useMemo(
        async () => {
            try {
                return await connect("/interact/event/", "GET");
            } catch (e){
                setTitle("Erreur");
                setMessage(String(e));
                openModal();
                return [];
            }
        },
        []
    );

    const columns = useMemo<ColumnDef<event>[]>(
        () => [
            {
                accessorKey: "id",
                header: "ID"
            },
            {
                accessorKey: "name",
                header: "Nom"
            },
            {
                accessorKey: "location",
                header: "Lieu"
            },
            {
                accessorKey: "is_active",
                header: "Actif",
                accessorFn: (row) => (row.is_active ? "Oui" : "Non")
            },
            {
                accessorKey: "image",
                header: "Image",
                cell: ({ getValue }) => {
                    const value = getValue() as string | null;
                    return !value ? null : <a>{value}</a>;
                }
            },
            {
                accessorKey: "iban",
                header: "IBAN"
            },
            {
                accessorKey: "products",
                header: "Produits",
                cell: ({row}) => {return <a onClick={async () => {
                    try {
                        const products = await connect(`/interact/event/${row.original.id}/products`, "GET");
                        setTitle("Produits");
                        setMessage(String(products));
                        openModal();
                    } catch (e) {
                        setTitle("Erreur");
                        setMessage(String(e));
                        openModal();
                    }


                }}>Visualiser</a>}
            },
            {
                accessorKey: "purchases",
                header: "Achats",
                cell: ({row}) => {return <a onClick={async () => {
                    try {
                        const purchases = await connect(`/interact/event/${row.original.id}/purchases`, "GET");
                        setTitle("Achats");
                        setMessage(String(purchases));
                        openModal();
                    } catch (e) {
                        setTitle("Erreur");
                        setMessage(String(e));
                        openModal();
                    }


                }}>Visualiser</a>}
            }
        ],
        []
    );

    return (
        <>
            <Edit
                columns={columns}
                data={events}
                add={add}
                edit={edit}
                remove={remove}
            ></Edit>
        </>
    );
}
