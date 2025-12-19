import { useEffect, useState, type ChangeEvent, type FormEvent, type JSX } from "react";
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
import "./Edit.css";

export default function Edit<T>({ columns, data, add, edit, remove }:
     { columns: Array<ColumnDef<T>>; data: Promise<Array<T>> ; add: () => void; edit?: (row: T) => void; remove: (row: T) => void; }): JSX.Element {
    const [selectedRow, setSelectedRow] = useState<T | null>();
    const [globalFilter, setGlobalFilter] = useState<string>("");
    const [pagination, setPagination] = useState<pagination>({
        pageIndex: 0,
        pageSize: 7
    });
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

    const [tableData, setTableData] = useState<Array<T>>([]);

    useEffect(() => {
        Promise.resolve(data).then((resolvedData) => {
            setTableData(resolvedData);
        });
    }, [data]);

    const table: Table<T> = useReactTable({
        data: tableData,
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
                                type="button"
                                onClick={(): void => {
                                    if (selectedRow) remove(selectedRow);
                                    setShowDeleteModal(false);
                                }}
                            >
                                Supprimer
                            </button>
                            <button
                                type="button"
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
                    <button type="button" onClick={add}>
                        Ajouter
                    </button>
                    {edit ?
                        <button
                            type="button"
                            onClick={(): void => {
                                if (selectedRow) edit(selectedRow);
                            }}
                            disabled={!selectedRow}
                        >
                            Modifier
                        </button>
                    :   <></>}
                    <button
                        type="button"
                        onClick={(): void => setShowDeleteModal(true)}
                        disabled={!selectedRow}
                    >
                        Supprimer
                    </button>
                </div>
                <div role="group">
                    <button
                        type="button"
                        onClick={(): void => {
                            table.previousPage();
                            setSelectedRow(null);
                        }}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Précédent
                    </button>
                    <button
                        type="button"
                        onClick={(): void => {
                            table.nextPage();
                            setSelectedRow(null);
                        }}
                        disabled={!table.getCanNextPage()}
                    >
                        Suivant
                    </button>
                </div>
            </div>
        </div>
    );
}
