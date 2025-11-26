import { useMemo, type JSX } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

import Edit from "../../table/Edit";
import { type category } from "../../../type";

export default function CategoryTable(): JSX.Element {
    const navigate = useNavigate();

    const add = () => {
        navigate("/admin/category/add");
    };

    const edit = (row: category) => {
        navigate(`/admin/category/edit`, {
            state: { category: row }
        });
    };

    const remove = () => {};

    const data: category[] = useMemo(
        () => [
            {
                id: 1,
                label: "Boissons",
                vat_type: "20%",
                deletion_date: null,
                picture: "drinks.jpg"
            },
            {
                id: 2,
                label: "Nourriture",
                vat_type: "5.5%",
                deletion_date: null,
                picture: "food.jpg"
            },
            {
                id: 3,
                label: "Snacks",
                vat_type: "20%",
                deletion_date: "2023-09-15",
                picture: "snacks.png"
            },
            {
                id: 4,
                label: "Desserts",
                vat_type: "10%",
                deletion_date: null,
                picture: "desserts.jpg"
            },
            {
                id: 5,
                label: "Alcools",
                vat_type: "20%",
                deletion_date: null,
                picture: "alcohol.jpg"
            }
        ],
        []
    );

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
                    return !value ? null : (
                            <a>{value}</a>
                        );
                }
            },
            {
                accessorKey: "deletion_date",
                header: "Date de suppression"
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
