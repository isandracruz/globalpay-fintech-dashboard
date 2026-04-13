import { TransactionStatus } from "@/features/dashboard/types/transaction";
import clsx from "clsx";

export const StatusBadge = ({ status }: { status: TransactionStatus }) => {
    const isSettled = status === 'Settled';

    return (
        <span className={clsx("inline-block items-center rounded-full px-3 py-1 text-secondary text-[10px] font-bold uppercase tracking-tighter", {
            'bg-teal-900/30 text-teal-400': isSettled,
            'bg-slate-700/50 text-slate-300': !isSettled
        })}>
            {status}
        </span>
    );
};