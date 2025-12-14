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
import type { pagination } from "../../type";

export default function Select<T>({ columns, data, confirm, cancel }:
     { columns: Array<ColumnDef<T>>; data: Array<T>; confirm: (row: T) => void; cancel: (row: T) => void; }): JSX.Element {
    const [selectedRow, setSelectedRow] = useState<T | null>();
    const [globalFilter, setGlobalFilter] = useState<string>("");
    const [pagination, setPagination] = useState<pagination>({
        pageIndex: 0,
        pageSize: 7
    });
    const [showCancelModal, setShowCancelModal] = useState<boolean>(false);

    const table: Table<T> = useReactTable({
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
            {showCancelModal ?
                <dialog open>
                    <article>
                        <header>
                            <p>
                                <strong>Annulation !</strong>
                            </p>
                        </header>
                        <p>Voulez-vraiment Annuler cet élément ?</p>
                        <footer>
                            <button
                                type="button"
                                onClick={(): void => {
                                    if (selectedRow) cancel(selectedRow);
                                    setShowCancelModal(false);
                                }}
                            >
                                Oui
                            </button>
                            <button
                                type="button"
                                className="secondary"
                                onClick={(): void => setShowCancelModal(false)}
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
                            <tr key={headerGroup.id}>
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
                    <button
                        type="button"
                        onClick={(): void => {
                            if (selectedRow) confirm(selectedRow);
                        }}
                        disabled={!selectedRow}
                    >
                        confirmer
                    </button>
                    <button
                        type="button"
                        onClick={(): void => {
                            if (selectedRow) cancel(selectedRow);
                        }}
                        disabled={!selectedRow}
                    >
                        Annuler
                    </button>
                </div>
                <div role="group">
                    <button
                        type="button"
                        onClick={(): void => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Précédent
                    </button>
                    <button
                        type="button"
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
