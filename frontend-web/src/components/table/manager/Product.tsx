import { useMemo, type JSX } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

import Edit from "../../table/Edit";
import { type productForManager as product } from "../../../type";

export default function Product(): JSX.Element {
    const navigate = useNavigate();

    const add = () => {
        navigate("add/product");
    };

    const edit = (row: product) => {
        navigate(`edit/product/${row.id}`);
    };

    const remove = () => {};

    const data: product[] = useMemo(
        () => [
            {
                id: 1,
                label: "Coca-Cola",
                is_available: true,
                excl_vat_price: "2.50",
                picture: "coca.jpg",
                category_id: 1,
            },
            {
                id: 2,
                label: "Sandwich Jambon",
                is_available: true,
                excl_vat_price: "4.00",
                picture: "sandwich.jpg",
                category_id: 2,
            },
            {
                id: 3,
                label: "Chips",
                is_available: false,
                excl_vat_price: "1.50",
                picture: null,
                category_id: 3,
            },
            {
                id: 4,
                label: "Eau Minérale",
                is_available: true,
                excl_vat_price: "1.00",
                picture: "water.png",
                category_id: 1,
            },
            {
                id: 5,
                label: "Bière",
                is_available: true,
                excl_vat_price: "3.50",
                picture: "beer.jpg",
                category_id: 1,
            }
        ],
        []
    );

    const columns = useMemo<ColumnDef<product>[]>(
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
                accessorKey: "is_available",
                header: "Disponible",
                accessorFn: (row) => (row.is_available ? "Oui" : "Non")
            },
            {
                accessorKey: "excl_vat_price",
                header: "Prix HT"
            },
            {
                accessorKey: "picture",
                header: "Image",
                cell: ({ getValue }) => {
                    const value = getValue() as string | null;
                    return !value ? null : <a>{value}</a>;
                }
            },
            {
                accessorKey: "category_id",
                header: "ID Catégorie"
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
                edit={edit}
                remove={remove}
            ></Edit>
        </>
    );
}
