import { useState, type ChangeEvent, type JSX } from "react";
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
    type ColumnDef,
    type Table
} from "@tanstack/react-table";
import "./Edit.css";

export default function CommonAdminTable({
    columns,
    data,
    add,
    edit,
    remove
}: {
    columns: Array<ColumnDef<any>>;
    data: Array<any>;
    add: () => void;
    edit: (row: any) => void;
    remove: (row: any) => void;
}): JSX.Element {
    const [selectedRow, setSelectedRow] = useState<any | null>();
    const [globalFilter, setGlobalFilter] = useState<string>("");
    const [pagination, setPagination] = useState<any>({
        pageIndex: 0,
        pageSize: 7
    });
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

    const table: Table<any> = useReactTable({
        data,
        columns,
        state: {
            globalFilter,
            pagination
        },

        onGlobalFilterChange: setGlobalFilter,
        onPaginationChange: setPagination,

        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    });

    return (
        <div>
            {showDeleteModal ?
                <dialog open>
                    <article>
                        <header>
                            <p>
                                <strong>Suppression !</strong>
                            </p>
                        </header>
                        <p>Voulez-vraiment supprimer cet élément ?</p>
                        <footer>
                            <button
                                onClick={(): void => {
                                    remove(selectedRow);
                                    setShowDeleteModal(false);
                                }}
                            >
                                Supprimer
                            </button>
                            <button
                                className="secondary"
                                onClick={(): void => setShowDeleteModal(false)}
                            >
                                Annuler
                            </button>
                        </footer>
                    </article>
                </dialog>
            :   <></>}
            <div id="header">
                <input
                    id="search"
                    placeholder="Rechercher un élément"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setGlobalFilter(e.target.value)
                    }
                />
            </div>
            <table id="adminTable">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => {
                        return (
                            <tr id={headerGroup.id}>
                                <th></th>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <th key={header.id}>
                                            {header.isPlaceholder ? null : (
                                                flexRender(
                                                    header.column.columnDef
                                                        .header,
                                                    header.getContext()
                                                )
                                            )}
                                        </th>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => {
                        return (
                            <tr key={row.id}>
                                <td>
                                    <input
                                        type="radio"
                                        name="row"
                                        onChange={() =>
                                            setSelectedRow(row.original)
                                        }
                                    />
                                </td>
                                {row.getVisibleCells().map((cell) => {
                                    return (
                                        <td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div id="footer">
                <div role="group">
                    <button onClick={add}>Ajouter</button>
                    <button
                        onClick={(): void => edit(selectedRow)}
                        disabled={!selectedRow}
                    >
                        Modifier
                    </button>
                    <button
                        onClick={(): void => setShowDeleteModal(true)}
                        disabled={!selectedRow}
                    >
                        Supprimer
                    </button>
                </div>
                <div role="group">
                    <button
                        onClick={(): void => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Précédent
                    </button>
                    <button
                        onClick={(): void => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Suivant
                    </button>
                </div>
            </div>
        </div>
    );
}
