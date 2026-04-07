import { supabase } from './supabase';

export type TransactionStatus = 'Completada' | 'Pendiente' | 'Fallida';

export interface Transaction {
  id: string;
  beneficiary_name: string;
  beneficiary_avatar: string;
  date: string; 
  origin_amount: number; 
  origin_currency: string; 
  dest_amount: number; 
  dest_currency: string; 
  status: TransactionStatus;
}

export const fetchTransactions = async (): Promise<Transaction[]> => {
  const { data, error } = await supabase
    .from('transactions')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};