import { useMedia } from 'react-use';
import { fixDate } from 'helpers/fixDate';
import { useGetTransactionsQuery } from '../../redux/transactionsSlice';
import {
  TableWrapper,
  TableHeadItem,
  DataItem,
  TableHead,
  Data,
  DataSum,
  DataMob,
  DataItemMob,
  HeadItemMob,
} from './transactionsTable.styled';

export function TransactionsTable() {
  const isMobile = useMedia('(max-width: 767px)');
  const { data: transactions } = useGetTransactionsQuery();
  const isShown = transactions !== undefined;
  return (
    isShown && (
      <>
        <TableWrapper>
          {!isMobile && (
            <>
              <thead>
                <TableHead>
                  <TableHeadItem>Date</TableHeadItem>
                  <TableHeadItem>Type</TableHeadItem>
                  <TableHeadItem>Category</TableHeadItem>
                  <TableHeadItem>Comment</TableHeadItem>
                  <TableHeadItem>Sum</TableHeadItem>
                  <TableHeadItem>Balance</TableHeadItem>
                </TableHead>
              </thead>
              <tbody>
                {transactions.map(
                  ({ _id, date, type, category, comment, sum, balance }) => (
                    <Data key={_id}>
                      <DataItem>{fixDate(date)}</DataItem>
                      <DataItem>{type === true ? '+' : '-'}</DataItem>
                      <DataItem style={{ textAlign: 'left' }}>
                        {category}
                      </DataItem>
                      <DataItem style={{ textAlign: 'left' }}>
                        {comment}
                      </DataItem>
                      <DataItem
                        style={{ textAlign: 'right', fontWeight: '700' }}
                      >
                        <DataSum type={type.toString()}>{sum}</DataSum>
                      </DataItem>
                      <DataItem style={{ textAlign: 'right' }}>
                        {balance}
                      </DataItem>
                    </Data>
                  )
                )}
              </tbody>
            </>
          )}
        </TableWrapper>
        {isMobile && (
          <>
            {transactions.map(
              ({ _id, date, type, category, comment, sum, balance }) => (
                <DataMob key={_id} type={type.toString()}>
                  <DataItemMob>
                    <HeadItemMob>Date</HeadItemMob>
                    {fixDate(date)}
                  </DataItemMob>
                  <DataItemMob>
                    <HeadItemMob>Type</HeadItemMob>
                    {type === true ? '+' : '-'}
                  </DataItemMob>
                  <DataItemMob>
                    <HeadItemMob>Category</HeadItemMob>
                    {category}
                  </DataItemMob>
                  <DataItemMob>
                    <HeadItemMob>Comment</HeadItemMob>
                    {comment}
                  </DataItemMob>
                  <DataItemMob style={{ fontWeight: '700' }}>
                    <HeadItemMob>Sum</HeadItemMob>
                    <DataSum type={type.toString()}>{sum}</DataSum>
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
    )
  );
}
