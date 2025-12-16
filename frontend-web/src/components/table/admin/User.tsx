import { useMemo, type JSX } from "react";
import { type ColumnDef } from "@tanstack/react-table";

import Edit from "../../table/Edit";
import { useNavigate } from "react-router-dom";
import { type user } from "../../../type";

export default function UserTable(): JSX.Element {
    const navigate = useNavigate();

    const add = () => {
        navigate("user/add");
    };

    const edit = (row: user) => {
        navigate(`user/edit/${row.id}`);
    };

    const remove = () => {
        // delete
    };

    const data: user[] = useMemo(
        () => [
            {
                id: 1,
                first_name: "Alice",
                last_name: "Dupont",
                email: "alice.dupont@example.com",
                avatar: "avatar1.jpg",
                is_admin: true,
            },
            {
                id: 2,
                first_name: "Bob",
                last_name: "Martin",
                email: "bob.martin@example.com",
                avatar: null,
                is_admin: false,
            },
            {
                id: 3,
                first_name: "Claire",
                last_name: "Leroy",
                email: "claire.leroy@example.com",
                avatar: "avatar3.png",
                is_admin: false,
            },
            {
                id: 4,
                first_name: "David",
                last_name: "Bernard",
                email: "david.bernard@example.com",
                avatar: null,
                is_admin: true,
            },
            {
                id: 5,
                first_name: "Emma",
                last_name: "Petit",
                email: "emma.petit@example.com",
                avatar: "avatar5.jpg",
                is_admin: false,
            },
            {
                id: 6,
                first_name: "François",
                last_name: "Dubois",
                email: "francois.dubois@example.com",
                avatar: "avatar6.jpg",
                is_admin: false,
            },
            {
                id: 7,
                first_name: "Gabrielle",
                last_name: "Moreau",
                email: "gabrielle.moreau@example.com",
                avatar: "avatar7.jpg",
                is_admin: true,
            },
            {
                id: 8,
                first_name: "Henri",
                last_name: "Simon",
                email: "henri.simon@example.com",
                avatar: null,
                is_admin: false,
            },
            {
                id: 9,
                first_name: "Isabelle",
                last_name: "Michel",
                email: "isabelle.michel@example.com",
                avatar: "avatar9.png",
                is_admin: false,
            },
            {
                id: 10,
                first_name: "Jean",
                last_name: "Lefebvre",
                email: "jean.lefebvre@example.com",
                avatar: "avatar10.jpg",
                is_admin: true,
            }
        ],
        []
    );

    const columns = useMemo<ColumnDef<user>[]>(
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
            {
                accessorKey: "is_admin",
                header: "Administrateur",
                accessorFn: (row) => (row.is_admin ? "Oui" : "Non")
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
