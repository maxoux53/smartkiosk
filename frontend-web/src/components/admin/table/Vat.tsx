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
        navigate(`/admin/vat/edit`, {
            state: { vat: row }
        });
    };

    const remove = () => {};

    const data: vat[] = useMemo(
        () => [
            {
                type: "Standard",
                rate: 20.0,
                deletion_date: null
            },
            {
                type: "Reduced",
                rate: 5.5,
                deletion_date: null
            },
            {
                type: "Intermediate",
                rate: 10.0,
                deletion_date: null
            },
            {
                type: "Super Reduced",
                rate: 2.1,
                deletion_date: "2023-01-01"
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
            },
            {
                accessorKey: "deletion_date",
                header: "Date de suppression",
                accessorFn: (row) =>
                    row.deletion_date ?
                        new Date(row.deletion_date).toLocaleDateString("fr-FR")
                    :   ""
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
