import AddTransactionButton from 'components/addTransaction/addTransactionButton/addTransactionButton';
import { TransactionsTable } from 'components/transactionTable/transactionTable';

export const HomeTab = () => {
  return (
    <div>
      <h2>HomeTab</h2>
      <TransactionsTable />
      <AddTransactionButton />
    </div>
  );
};
