import { supabase } from '@/lib/supabase';
import { Transaction } from '../types/transaction';

export const getRecentTransactions = async (): Promise<Transaction[]> => {
  const { data, error } = await supabase
    .from('transactions')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};