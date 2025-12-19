import { useMemo, type JSX } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

import Edit from "../../table/Edit";
import { type category } from "../../../type";
import { connect } from "../../../API/connect";
import { useModal } from "../../../contexts/ModalContext";

export default function Category(): JSX.Element {
    const {setTitle, openModal, setMessage} = useModal();
    const navigate = useNavigate();

    const add = () => {
        navigate("category/add");
    };

    const edit = (row: category) => {
        navigate(`category/edit/${row.id}`);
    };

    const remove = async (row: category) => {
        try {
            await connect(`/interact/category/${row.id}`, "DELETE");
        } catch(e) {
            setTitle("Erreur");
            setMessage(String(e));
            openModal();
        }
    };

    const categories: Promise<Array<category>> = useMemo(
        async () => {
            try {
                return await connect("/interact/category/", "GET");
            } catch (e){
                setTitle("Erreur");
                setMessage(String(e));
                openModal();
                return [];
            }
        },
        []
    );

    console.log(categories);

    const columns = useMemo<ColumnDef<category>[]>(
        () => [
            {
                accessorKey: "id",
                header: "ID"
            },
            {
                accessorKey: "label",
                header: "Libellé"
            },
            {
                accessorKey: "vat_type",
                header: "Type TVA"
            },
            {
                accessorKey: "picture",
                header: "Image",
                cell: ({ getValue }) => {
                    const value = getValue() as string | null;
                    return !value ? null : <a>{value}</a>;
                }
            }
        ],
        []
    );

    return (
        <>
            <Edit
                columns={columns}
                data={categories}
                add={add}
                edit={edit}
                remove={remove}
            ></Edit>
        </>
    );
}
