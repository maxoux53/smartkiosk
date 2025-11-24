import { useMemo, type JSX } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

import Edit from "../../table/Edit";
import { type purchase } from "../../../type";

export default function PurchaseTable(): JSX.Element {
    const navigate = useNavigate();

    const add = () => {
        navigate("/admin/purchase/add");
    };

    const edit = (row: purchase) => {
        navigate(`/admin/purchase/edit`, {
            state: { purchase: row }
        });
    };

    const remove = () => {};

    const data: purchase[] = useMemo(
        () => [
            {
                id: 1,
                date: "2023-10-25",
                user_id: 1
            },
            {
                id: 2,
                date: "2023-10-26",
                user_id: 2
            },
            {
                id: 3,
                date: "2023-10-27",
                user_id: 1
            },
            {
                id: 4,
                date: "2023-10-28",
                user_id: 3
            },
            {
                id: 5,
                date: "2023-10-29",
                user_id: 4
            }
        ],
        []
    );

    const columns = useMemo<ColumnDef<purchase>[]>(
        () => [
            {
                accessorKey: "id",
                header: "ID"
            },
            {
                accessorKey: "date",
                header: "Date"
            },
            {
                accessorKey: "user_id",
                header: "ID Utilisateur"
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
