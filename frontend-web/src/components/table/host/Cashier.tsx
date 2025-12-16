import { useMemo, type JSX } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

import Edit from "../../table/Edit";
import { type cashier } from "../../../type";

export default function Cashier(): JSX.Element {
    const navigate = useNavigate();

    const add = () => {
        navigate("add/cashier");
    };

    const remove = () => {};

    const data: cashier[] = useMemo(
        () => [
            
        ],
        []
    );

    const columns = useMemo<ColumnDef<cashier>[]>(
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
        ],
        []
    );

    return (
        <>
            <Edit
                columns={columns}
                data={data}
                add={add}
                remove={remove}
            ></Edit>
        </>
    );
}
