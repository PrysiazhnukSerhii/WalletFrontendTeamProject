import { useMedia } from 'react-use';
import { useGetTransactionsQuery } from '../../redux/transactionsSlice';
import {
  TableWrapper,
  TableHeadItem,
  DataItem,
  TableHead,
  Data,
  DataMob,
  DataItemMob,
  HeadItemMob,
} from './transactionsTable.styled';

const fixDate = date => {
  const dateString = new Date(date);
  const day = dateString
    .getDate()
    .toString()
    .padStart(2, '0');
  const month = (dateString.getMonth() + 1).toString().padStart(2, '0');
  const year = dateString
    .getFullYear()
    .toString()
    .slice(2);

  return `${day}.${month}.${year}`;
};

export function TransactionsTable() {
  const isMobile = useMedia('(max-width: 767px)');
  //const isNoMobile = useMedia('(min-width: 768px)');
  const { data: transactions } = useGetTransactionsQuery();
  console.log(transactions);
  return (
    <>
      <TableWrapper>
        {!isMobile && (
          <>
            <TableHead>
              <TableHeadItem>Date</TableHeadItem>
              <TableHeadItem>Type</TableHeadItem>
              <TableHeadItem>Category</TableHeadItem>
              <TableHeadItem>Comment</TableHeadItem>
              <TableHeadItem>Sum</TableHeadItem>
              <TableHeadItem>Balance</TableHeadItem>
            </TableHead>
            {transactions.map(
              ({ id, date, type, category, comment, sum, balance }) => (
                <Data key={id}>
                  <DataItem>{fixDate(date)}</DataItem>
                  <DataItem>{type}</DataItem>
                  <DataItem style={{ textAlign: 'left' }}>{category}</DataItem>
                  <DataItem style={{ textAlign: 'left' }}>{comment}</DataItem>
                  <DataItem style={{ textAlign: 'right', fontWeight: '700' }}>
                    {sum}
                  </DataItem>
                  <DataItem style={{ textAlign: 'right' }}>{balance}</DataItem>
                </Data>
              )
            )}
          </>
        )}
      </TableWrapper>
      {isMobile && (
        <>
          {transactions.map(
            ({ id, date, type, category, comment, sum, balance }) => (
              <DataMob key={id}>
                <DataItemMob>
                  <HeadItemMob>Date</HeadItemMob>
                  {fixDate(date)}
                </DataItemMob>
                <DataItemMob>
                  <HeadItemMob>Type</HeadItemMob>
                  {type}
                </DataItemMob>
                <DataItemMob>
                  <HeadItemMob>Category</HeadItemMob>
                  {category}
                </DataItemMob>
                <DataItemMob>
                  <HeadItemMob>Comment</HeadItemMob>
                  {comment}
                </DataItemMob>
                <DataItemMob>
                  <HeadItemMob>Sum</HeadItemMob>
                  {sum}
                </DataItemMob>
                <DataItemMob>
                  <HeadItemMob>Balance</HeadItemMob>
                  {balance}
                </DataItemMob>
              </DataMob>
            )
          )}
        </>
      )}
    </>
  );
}
