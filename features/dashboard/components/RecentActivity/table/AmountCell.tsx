interface Props {
  amount: number;
  currency: string;
  isOrigin?: boolean;
}

export const AmountCell = ({ amount, currency, isOrigin }: Props) => {
  const isPositive = amount > 0;
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(Math.abs(amount)).replace('$', '');
  
  let colorClass = 'text-white';
  let prefix = '';
  
  if (isOrigin) {
    colorClass = isPositive ? 'text-teal-400' : 'text-red-400';
    prefix = isPositive ? '+$' : '-$';
  }

  return (
    <div className="flex items-baseline gap-1">
      <span className={`font-medium ${colorClass}`}>
        {prefix}{formattedAmount}
      </span>
      <span className="text-xs font-bold text-slate-500 uppercase">{currency}</span>
    </div>
  );
};