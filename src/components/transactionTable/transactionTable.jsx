import { useGetTransactionsQuery } from '../../redux/transactionsSlice';
import {
  TableWrapper,
  TableHead,
  TableHeadItem,
  Data,
  DataItem,
} from './transactionsTable.styled';

export function TransactionsTable() {
  const { data: transactions } = useGetTransactionsQuery();
  console.log(transactions);
  return (
    <>
      <TableWrapper>
        <thead>
          <TableHead>
            <TableHeadItem style={{ marginRight: '62px' }}>Date</TableHeadItem>
            <TableHeadItem style={{ marginRight: '47px' }}>Type</TableHeadItem>
            <TableHeadItem style={{ marginRight: '65px' }}>
              Category
            </TableHeadItem>
            <TableHeadItem style={{ marginRight: '95px' }}>
              Comment
            </TableHeadItem>
            <TableHeadItem style={{ marginRight: '49px' }}>Sum</TableHeadItem>
            <TableHeadItem>Balance</TableHeadItem>
          </TableHead>
        </thead>
        <tbody>
          <Data>
            <DataItem>22.11.22</DataItem>
            <DataItem>+</DataItem>
            <DataItem>Income</DataItem>
            <DataItem>salary</DataItem>
            <DataItem>0</DataItem>
            <DataItem>0</DataItem>
          </Data>
          <Data>
            <DataItem>22.11.22</DataItem>
            <DataItem>+</DataItem>
            <DataItem>Income</DataItem>
            <DataItem>salary</DataItem>
            <DataItem>0</DataItem>
            <DataItem>0</DataItem>
          </Data>
        </tbody>
      </TableWrapper>
    </>
  );
}
