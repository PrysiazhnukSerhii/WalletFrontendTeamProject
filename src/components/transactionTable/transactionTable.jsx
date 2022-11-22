import { useGetTransactionsQuery } from '../../redux/transactionsSlice';
import {
  TableWrapper,
  TableHead,
  TableHeadItem,
} from './transactionsTable.styled';

export function TransactionsTable() {
  const { data: transactions } = useGetTransactionsQuery();
  console.log(transactions);
  return (
    <>
      <TableWrapper>
        <TableHead>
          <tr>
            <TableHeadItem>Date</TableHeadItem>
            <TableHeadItem>Type</TableHeadItem>
            <TableHeadItem>Category</TableHeadItem>
            <TableHeadItem>Comment</TableHeadItem>
            <TableHeadItem>Sum</TableHeadItem>
            <TableHeadItem>Balance</TableHeadItem>
          </tr>
        </TableHead>
        <tbody>
          <tr>
            <td>22.11.2022</td>
            <td>+</td>
            <td>Income</td>
            <td>salary</td>
            <td>5000.00</td>
            <td>5000.00</td>
          </tr>
        </tbody>
      </TableWrapper>
    </>
  );
}
