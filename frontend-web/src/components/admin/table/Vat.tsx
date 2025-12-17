import { useMemo, type JSX } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

import Edit from "../../table/Edit";
import { type vat } from "../../../type";

export default function VatTable(): JSX.Element {
    const navigate = useNavigate();

    const add = () => {
        navigate("/admin/vat/add");
    };

    const edit = (row: vat) => {
        navigate(`/admin/vat/edit/${row.type}`);
    };

    const remove = () => {};

    const data: vat[] = useMemo(
        () => [
            {
                type: "Standard",
                rate: 20,
            },
            {
                type: "Reduced",
                rate: 5,
            },
            {
                type: "Intermediate",
                rate: 10,
            },
            {
                type: "Super Reduced",
                rate: 2,
            }
        ],
        []
    );

    const columns = useMemo<ColumnDef<vat>[]>(
        () => [
            {
                accessorKey: "type",
                header: "Type"
            },
            {
                accessorKey: "rate",
                header: "Taux (%)"
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
