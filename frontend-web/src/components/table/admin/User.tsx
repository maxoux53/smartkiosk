import { useMemo, type JSX } from "react";
import { type ColumnDef } from "@tanstack/react-table";

import Edit from "../../table/Edit";
import { useNavigate } from "react-router-dom";
import { type user } from "../../../type";
import { connect } from "../../../API/connect";
import { useModal } from "../../../contexts/ModalContext";

export default function User(): JSX.Element {
    const {setTitle, openModal, setMessage} = useModal();
    const navigate = useNavigate();

    const add = () => {
        navigate("user/add");
    };

    const edit = (row: user) => {
        navigate(`user/edit/${row.id}`);
    };

    const remove = async (row: user) => {
        try {
            await connect(`/interact/user/${row.id}`, "DELETE");
        } catch(e) {
            setTitle("Erreur");
            setMessage(String(e));
            openModal();
        }
    };

    const users: Promise<Array<user>> = useMemo(
        async () => {
            try {
                return await connect("/interact/user/", "GET");
            } catch (e){
                setTitle("Erreur");
                setMessage(String(e));
                openModal();
                return [];
            }
        },
        []
    );

    const columns = useMemo<ColumnDef<user>[]>(
        () => [
            {
                accessorKey: "id",
                header: "ID"
            },
            {
                accessorKey: "first_name",
                header: "Prénom"
            },
            {
                accessorKey: "last_name",
                header: "Nom de famille"
            },
            {
                accessorKey: "email",
                header: "Email"
            },
            {
                accessorKey: "avatar",
                header: "Avatar",
                cell: ({ getValue }) => {
                    const value = getValue() as string | null;
                    return !value ? null : <a>{value}</a>;
                }
            },
            {
                accessorKey: "is_admin",
                header: "Administrateur",
                cell: (getValue) => (getValue ? "Oui" : "Non")
            },
        ],
        []
    );

    return (
        <>
            <Edit
                columns={columns}
                data={users}
                add={add}
                edit={edit}
                remove={remove}
            ></Edit>
        </>
    );
}
