import { TransactionsTable } from 'components/TransactionTable/transactionTable';
import AddTransactionButton from 'components/addTransaction/addTransactionButton/addTransactionButton';
import Balance from 'components/balance/balance';
import Media from 'react-media';

export const HomeTab = () => {
  return (
    <div>
      <h2>HomeTab</h2>
      <Media query="(max-width: 767px)" render={() => <Balance />} />

      <TransactionsTable />
      <AddTransactionButton />
    </div>
  );
};
