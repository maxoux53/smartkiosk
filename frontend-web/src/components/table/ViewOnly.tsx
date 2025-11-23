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

export default function CommonAdminTable({
    columns,
    data
}: {
    columns: Array<ColumnDef<any>>;
    data: Array<any>;
}): JSX.Element {
    const [globalFilter, setGlobalFilter] = useState<string>("");
    const [pagination, setPagination] = useState<any>({
        pageIndex: 0,
        pageSize: 7
    });

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
