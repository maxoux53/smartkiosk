import { useState, type ChangeEvent, type FormEvent, type JSX } from "react";
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
    type ColumnDef,
    type Table
} from "@tanstack/react-table";
import type { pagination, purchase } from "../../type";

export default function Select({ columns, data, confirm, cancel }:
     { columns: Array<ColumnDef<purchase>>; data: Array<purchase>; confirm: (row: purchase) => void; cancel: (row: purchase) => void; }): JSX.Element {
    const [selectedRow, setSelectedRow] = useState<purchase | null>();
    const [globalFilter, setGlobalFilter] = useState<string>("");
    const [pagination, setPagination] = useState<pagination>({
        pageIndex: 0,
        pageSize: 7
    });
    const [showCancelModal, setShowCancelModal] = useState<boolean>(false);
    const [showDetailModal, setShowDetailModal] = useState<boolean>(false);

    const table: Table<purchase> = useReactTable({
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

            {showDetailModal ?
                <dialog open>
                    <article>
                        <header>
                            <p>
                                <strong>Détail de la commande</strong>
                            </p>
                        </header>
                        <ul>
                            <li>test</li>
                        </ul>
                        <footer>
                            <button
                                type="button"
                                onClick={(): void => {
                                    if (selectedRow) cancel(selectedRow);
                                    setShowDetailModal(false);
                                }}
                            >
                                Fermer
                            </button>
                        </footer>
                    </article>
                </dialog>
            :   <></>}

            <div id="header">
                <form
                    role="search"
                    onSubmit={(e: FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                    }}
                >
                    <input
                        id="search"
                        type="search"
                        placeholder="Rechercher un élément"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setGlobalFilter(e.target.value)
                        }
                    />
                    <input type="submit" value="Search" />
                </form>
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
                            if (selectedRow) setShowDetailModal(true);
                        }}
                        disabled={!selectedRow}
                    >
                        Détail
                    </button>
                    <button
                        type="button"
                        onClick={(): void => {
                            if (selectedRow) confirm(selectedRow);
                        }}
                        disabled={!selectedRow}
                    >
                        Confirmer
                    </button>
                    <button
                        type="button"
                        onClick={(): void => {
                            if (selectedRow) setShowCancelModal(true);
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
