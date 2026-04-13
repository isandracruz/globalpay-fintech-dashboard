'use client';

import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { getRecentTransactions } from '../../services/transactions';
import { useSuspenseQuery } from '@tanstack/react-query';
import { columns } from './table/columns';

export function ActivityTable() {

    const { data: transactions } = useSuspenseQuery({
        queryKey: ['transactions', 'recent'],
        queryFn: getRecentTransactions,
    });

    const table = useReactTable({
        data: transactions ?? [],
        columns: columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead className="border-b border-slate-800 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className="pb-4 pr-4">
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className="hover:bg-slate-800/20 transition-colors">
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="py-4 pr-4 align-middle">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}