import { useMemo, type JSX } from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

import Edit from "../../table/Edit";
import { type event } from "../../../type";

export default function EventTable(): JSX.Element {
    const navigate = useNavigate();

    const add = () => {
        navigate("/admin/event/add");
    };

    const edit = (row: event) => {
        navigate(`/admin/event/edit`, {
            state: { event: row }
        });
    };

    const remove = () => {};

    const data: event[] = useMemo(
        () => [
            {
                id: 1,
                name: "Summer Festival",
                location: "Paris",
                is_active: true,
                image: "summer.jpg",
                iban: "FR7612345678901234567890123"
            },
            {
                id: 2,
                name: "Tech Conference",
                location: "Lyon",
                is_active: false,
                image: null,
                iban: "FR7698765432109876543210987"
            },
            {
                id: 3,
                name: "Art Exhibition",
                location: "Bordeaux",
                is_active: true,
                image: "art.png",
                iban: "FR7611223344556677889900112"
            },
            {
                id: 4,
                name: "Music Concert",
                location: "Marseille",
                is_active: true,
                image: "concert.jpg",
                iban: "FR7655443322110099887766554"
            },
            {
                id: 5,
                name: "Food Market",
                location: "Lille",
                is_active: false,
                image: null,
                iban: "FR7699887766554433221100998"
            }
        ],
        []
    );

    const columns = useMemo<ColumnDef<event>[]>(
        () => [
            {
                accessorKey: "id",
                header: "ID"
            },
            {
                accessorKey: "name",
                header: "Nom"
            },
            {
                accessorKey: "location",
                header: "Lieu"
            },
            {
                accessorKey: "is_active",
                header: "Actif",
                cell: ({ getValue }) => (getValue() ? "Oui" : "Non")
            },
            {
                accessorKey: "image",
                header: "Image",
                cell: ({ getValue }) => {
                    const value = getValue() as string | null;
                    return !value ? null : (
                            <a>{value}</a>
                        );
                }
            },
            {
                accessorKey: "iban",
                header: "IBAN"
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
