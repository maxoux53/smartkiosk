import { useMemo, type JSX } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

import Edit from "../../table/Edit";
import { type membership } from "../../../type";

export default function MembershipTable(): JSX.Element {
    const navigate = useNavigate();

    const add = () => {
        navigate("membership/add");
    };

    const edit = (row: membership) => {
        navigate(`membership/edit/${row.user_id}/${row.event_id}`);
    };

    const remove = () => {};

    const data: membership[] = useMemo(
        () => [
            {
                user_id: 1,
                event_id: 1,
                role: "Admin"
            },
            {
                user_id: 2,
                event_id: 1,
                role: "Member"
            },
            {
                user_id: 3,
                event_id: 2,
                role: "Guest"
            },
            {
                user_id: 4,
                event_id: 2,
                role: "Member"
            },
            {
                user_id: 5,
                event_id: 3,
                role: "Admin"
            }
        ],
        []
    );

    const columns = useMemo<ColumnDef<membership>[]>(
        () => [
            {
                accessorKey: "user_id",
                header: "ID Utilisateur"
            },
            {
                accessorKey: "event_id",
                header: "ID Événement"
            },
            {
                accessorKey: "role",
                header: "Rôle"
            }
        ],
        []
    );

    return (
        <>
            <Edit
                columns={columns}
                data={data}
                add={add}
                edit={edit}
                remove={remove}
            ></Edit>
        </>
    );
}
