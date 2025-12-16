import { useMemo, type JSX } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { type product } from "../../../type";
import ViewOnly from "../ViewOnly";

export default function Product(): JSX.Element {
    const data: product[] = useMemo(
        () => [
            {
                id: 1,
                label: "Coca-Cola",
                is_available: true,
                excl_vat_price: "2.50",
                picture: "coca.jpg",
                category_id: 1,
                event_id: null
            },
            {
                id: 2,
                label: "Sandwich Jambon",
                is_available: true,
                excl_vat_price: "4.00",
                picture: "sandwich.jpg",
                category_id: 2,
                event_id: 1
            },
            {
                id: 3,
                label: "Chips",
                is_available: false,
                excl_vat_price: "1.50",
                picture: null,
                category_id: 3,
                event_id: null
            },
            {
                id: 4,
                label: "Eau Minérale",
                is_available: true,
                excl_vat_price: "1.00",
                picture: "water.png",
                category_id: 1,
                event_id: 2
            },
            {
                id: 5,
                label: "Bière",
                is_available: true,
                excl_vat_price: "3.50",
                picture: "beer.jpg",
                category_id: 1,
                event_id: 1
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
            }
        ],
        []
    );

    return (
        <>
            <ViewOnly
                columns={columns}
                data={data}
            ></ViewOnly>
        </>
    );
}
