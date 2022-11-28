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
            <Data>
              <DataItem>22.11.22</DataItem>
              <DataItem>+</DataItem>
              <DataItem style={{ textAlign: 'left' }}>Income</DataItem>
              <DataItem style={{ textAlign: 'left' }}>salary</DataItem>
              <DataItem style={{ textAlign: 'right', fontWeight: '700' }}>
                0000000
              </DataItem>
              <DataItem style={{ textAlign: 'right' }}>00000000</DataItem>
            </Data>
          </>
        )}
      </TableWrapper>
      {isMobile && (
        <>
          <DataMob>
            <DataItemMob>
              <HeadItemMob>Date</HeadItemMob>22.11.22
            </DataItemMob>
            <DataItemMob>
              <HeadItemMob>Type</HeadItemMob>+
            </DataItemMob>
            <DataItemMob>
              <HeadItemMob>Category</HeadItemMob>Car
            </DataItemMob>
            <DataItemMob>
              <HeadItemMob>Comment</HeadItemMob>premium
            </DataItemMob>
            <DataItemMob>
              <HeadItemMob>Sum</HeadItemMob>100.00
            </DataItemMob>
            <DataItemMob>
              <HeadItemMob>Balance</HeadItemMob>300.00
            </DataItemMob>
          </DataMob>
          <DataMob>
            <DataItemMob>
              <HeadItemMob>Date</HeadItemMob>22.11.22
            </DataItemMob>
            <DataItemMob>
              <HeadItemMob>Type</HeadItemMob>+
            </DataItemMob>
            <DataItemMob>
              <HeadItemMob>Category</HeadItemMob>Car
            </DataItemMob>
            <DataItemMob>
              <HeadItemMob>Comment</HeadItemMob>premium
            </DataItemMob>
            <DataItemMob>
              <HeadItemMob>Sum</HeadItemMob>200.00
            </DataItemMob>
            <DataItemMob>
              <HeadItemMob>Balance</HeadItemMob>100.00
            </DataItemMob>
          </DataMob>
        </>
      )}
    </>
  );
}
