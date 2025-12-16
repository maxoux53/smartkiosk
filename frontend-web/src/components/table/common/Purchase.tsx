import { useMemo, type JSX } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

import { type purchase } from "../../../type";
import Select from "../Select";

export default function Purchase(): JSX.Element {
    const navigate = useNavigate();

    const confirm = () => {
        navigate("purchase/add");
    };

    const cancel = () => {};

    const data: purchase[] = useMemo(
        () => [
            { id: 1, date: new Date("2023-10-25"), user_id: 1 },
            { id: 2, date: new Date("2023-10-26"), user_id: 2 },
            { id: 3, date: new Date("2023-10-27"), user_id: 1 },
            { id: 4, date: new Date("2023-10-28"), user_id: 3 },
            { id: 5, date: new Date("2023-10-29"), user_id: 4 }
        ],
        []
    );

    const columns = useMemo<ColumnDef<purchase>[]>(
        () => [
            { accessorKey: "id", header: "ID" },
            {
                accessorKey: "date",
                header: "Date"
            },
            { accessorKey: "user_id", header: "ID Utilisateur" }
        ],
        []
    );

    return (
        <>
            <Select columns={columns} data={data} confirm={confirm} cancel={cancel} />
        </>
    );
}
