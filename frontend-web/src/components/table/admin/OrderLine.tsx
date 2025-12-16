import { useMemo, type JSX } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

import Edit from "../../table/Edit";
import { type order_line } from "../../../type";

export default function OrderLineTable(): JSX.Element {
    const navigate = useNavigate();

    const add = () => {
        navigate("orderline/add");
    };

    const edit = (row: order_line) => {
        navigate(`orderline/edit/${row.purchase_id}/${row.product_id}`);
    };

    const remove = () => {};

    const data: order_line[] = useMemo(
        () => [
            {
                product_id: 1,
                purchase_id: 1,
                quantity: 2,
                price: 10.5
            },
            {
                product_id: 2,
                purchase_id: 1,
                quantity: 1,
                price: 5.0
            },
            {
                product_id: 3,
                purchase_id: 2,
                quantity: 5,
                price: 2.5
            },
            {
                product_id: 1,
                purchase_id: 3,
                quantity: 1,
                price: 10.5
            },
            {
                product_id: 4,
                purchase_id: 4,
                quantity: 3,
                price: 7.0
            }
        ],
        []
    );

    const columns = useMemo<ColumnDef<order_line>[]>(
        () => [
            {
                accessorKey: "purchase_id",
                header: "ID Achat"
            },
            {
                accessorKey: "product_id",
                header: "ID Produit"
            },
            {
                accessorKey: "quantity",
                header: "Quantité"
            },
            {
                accessorKey: "price",
                header: "Prix"
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
