import { ColumnDef, createColumnHelper } from '@tanstack/react-table';

import { RecipientCell } from './RecipientCell';
import { AmountCell } from './AmountCell';
import { StatusBadge } from './StatusBadge';
import { Transaction } from '@/features/dashboard/types/transaction';

const columnHelper = createColumnHelper<Transaction>();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const columns: ColumnDef<Transaction, any>[] = [
  columnHelper.accessor('recipientName', {
    header: 'RECIPIENT',
    cell: (info) => {
      return <RecipientCell
        name={info.getValue()}
        imageUrl={info.row.original.recipientImage}
      />;
    },
  }),
  columnHelper.accessor('created_at', {
    header: 'DATE',
    cell: (info) => (
      <span className="text-slate-400">
        {new Date(info.getValue()).toLocaleDateString('en-US')}
      </span>)
  }),
  columnHelper.accessor('originAmount', {
    header: 'ORIGIN AMOUNT',
    cell: (info) => (
      <AmountCell
        amount={info.getValue()}
        currency={info.row.original.originCurrency}
        isOrigin
      />
    ),
  }),
  columnHelper.accessor('destinationAmount', {
    header: 'DESTINATION',
    cell: (info) => (
      <AmountCell
        amount={info.getValue()}
        currency={info.row.original.destinationCurrency}
      />
    ),
  }),
  columnHelper.accessor('status', {
    header: 'STATUS',
    cell: (info) => <StatusBadge status={info.getValue()} />,
  }),
];