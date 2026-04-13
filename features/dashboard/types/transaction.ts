export type TransactionStatus = 'Settled' | 'Pending';

export interface Transaction {
  id: string;
  recipientName: string;
  recipientImage?: string;
  created_at: string;
  originAmount: number;
  originCurrency: string;
  destinationAmount: number;
  destinationCurrency: string;
  status: TransactionStatus;
}