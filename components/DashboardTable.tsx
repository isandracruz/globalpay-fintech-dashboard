"use client";

import { useQuery } from '@tanstack/react-query';
import { fetchTransactions } from '../lib/api';

export default function DashboardTable() {
  const { data: transactions, isLoading, isError, error } = useQuery({
    queryKey: ['transactions'],
    queryFn: fetchTransactions,
  });

  if (isLoading) {
    return <div className="text-center p-8 text-gray-500">Cargando transacciones...</div>;
  }

  if (isError) {
    return <div className="text-center p-8 text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-[#111827]">Historial de Movimientos</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 text-sm text-gray-500">
              <th className="pb-3 font-medium">Beneficiario</th>
              <th className="pb-3 font-medium">Fecha</th>
              <th className="pb-3 font-medium">Origen</th>
              <th className="pb-3 font-medium">Destino</th>
              <th className="pb-3 font-medium">Estado</th>
            </tr>
          </thead>
          <tbody>
            {transactions?.map((tx) => (
              <tr key={tx.id} className="border-b border-gray-100 hover:bg-[#F9FAFB] transition-colors">
                <td className="py-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                    {tx.beneficiary_avatar}
                  </div>
                  <span className="font-medium text-[#111827]">{tx.beneficiary_name}</span>
                </td>
                <td className="py-4 text-gray-600">{tx.date}</td>
                <td className="py-4 font-medium text-[#111827]">
                  {tx.origin_amount} {tx.origin_currency}
                </td>
                <td className="py-4 font-medium text-[#111827]">
                  {tx.dest_amount} {tx.dest_currency}
                </td>
                <td className="py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    tx.status === 'Completada' ? 'bg-green-100 text-green-700' :
                    tx.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}