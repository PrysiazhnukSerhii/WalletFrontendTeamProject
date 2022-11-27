import { useGetTransactionsQuery } from '../../redux/transactionsSlice';
import {
  TableWrapper,
  TableHeadItem,
  DataItem,
  TableHead,
  Data,
} from './transactionsTable.styled';

export function TransactionsTable() {
  const { data: transactions } = useGetTransactionsQuery();
  console.log(transactions);
  return (
    <>
      <TableWrapper>
        <TableHead>
          <TableHeadItem>Date</TableHeadItem>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Category</TableHeadItem>
          <TableHeadItem>Comment</TableHeadItem>
          <TableHeadItem>Sum</TableHeadItem>
          <TableHeadItem>Balance</TableHeadItem>
        </TableHead>
        <Data>
          <DataItem>22.11.22</DataItem>
          <DataItem>+</DataItem>
          <DataItem style={{ textAlign: 'left' }}>Income</DataItem>
          <DataItem style={{ textAlign: 'left' }}>salary</DataItem>
          <DataItem style={{ textAlign: 'right' }}>0000000</DataItem>
          <DataItem style={{ textAlign: 'right' }}>00000000</DataItem>
        </Data>
        <Data>
          <DataItem>22.11.22</DataItem>
          <DataItem>+</DataItem>
          <DataItem style={{ textAlign: 'left' }}>Car</DataItem>
          <DataItem style={{ textAlign: 'left' }}>premium</DataItem>
          <DataItem style={{ textAlign: 'right' }}>000000000</DataItem>
          <DataItem style={{ textAlign: 'right' }}>00000</DataItem>
        </Data>
      </TableWrapper>
    </>
  );
}
