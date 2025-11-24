import { useMemo, type JSX } from "react";
import { type ColumnDef } from "@tanstack/react-table";

import Edit from "../../table/Edit";
import { useNavigate } from "react-router-dom";
import { type user } from "../../../type";

export default function UserTable(): JSX.Element {
    const navigate = useNavigate();

    const add = () => {
        navigate("/admin/user/add");
    };

    const edit = (row: user) => {
        navigate(`/admin/user/edit/`, {
            state: { user: row }
        });
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
                password: "password123",
                avatar: "avatar1.jpg",
                is_admin: true,
                deletion_date: null
            },
            {
                id: 2,
                first_name: "Bob",
                last_name: "Martin",
                email: "bob.martin@example.com",
                password: "securepass",
                avatar: null,
                is_admin: false,
                deletion_date: "2023-10-01"
            },
            {
                id: 3,
                first_name: "Claire",
                last_name: "Leroy",
                email: "claire.leroy@example.com",
                password: "mypassword",
                avatar: "avatar3.png",
                is_admin: false,
                deletion_date: null
            },
            {
                id: 4,
                first_name: "David",
                last_name: "Bernard",
                email: "david.bernard@example.com",
                password: "testpass",
                avatar: null,
                is_admin: true,
                deletion_date: null
            },
            {
                id: 5,
                first_name: "Emma",
                last_name: "Petit",
                email: "emma.petit@example.com",
                password: "password456",
                avatar: "avatar5.jpg",
                is_admin: false,
                deletion_date: "2023-11-15"
            },
            {
                id: 6,
                first_name: "François",
                last_name: "Dubois",
                email: "francois.dubois@example.com",
                password: "newpass789",
                avatar: "avatar6.jpg",
                is_admin: false,
                deletion_date: null
            },
            {
                id: 7,
                first_name: "Gabrielle",
                last_name: "Moreau",
                email: "gabrielle.moreau@example.com",
                password: "pass1234",
                avatar: "avatar7.jpg",
                is_admin: true,
                deletion_date: null
            },
            {
                id: 8,
                first_name: "Henri",
                last_name: "Simon",
                email: "henri.simon@example.com",
                password: "henripass",
                avatar: null,
                is_admin: false,
                deletion_date: "2023-12-01"
            },
            {
                id: 9,
                first_name: "Isabelle",
                last_name: "Michel",
                email: "isabelle.michel@example.com",
                password: "isapass",
                avatar: "avatar9.png",
                is_admin: false,
                deletion_date: null
            },
            {
                id: 10,
                first_name: "Jean",
                last_name: "Lefebvre",
                email: "jean.lefebvre@example.com",
                password: "jeanpass",
                avatar: "avatar10.jpg",
                is_admin: true,
                deletion_date: null
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
                accessorKey: "password",
                header: "Mot de passe"
            },
            {
                accessorKey: "avatar",
                header: "Avatar",
                cell: ({ getValue }) => {
                    const value = getValue() as string | null;
                    return !value ? null : (
                            <button
                                type="button"
                                onClick={(): void => console.log(value)}
                            >
                                Voir avatar
                            </button>
                        );
                }
            },
            {
                accessorKey: "is_admin",
                header: "Administrateur",
                cell: ({ getValue }) => (getValue() ? "Oui" : "Non")
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
