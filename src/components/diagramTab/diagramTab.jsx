import { useSelector } from 'react-redux';
import { Chart } from 'components/chart/chart';
import { Table } from 'components/table/table';
import { StatisticsContainer, TableContainer } from './diagramTab.styled';
import { Selectors } from 'components/selectors/selectors';

export function DiagramTab() {
  const statistics = useSelector(state => state.userInformation.financeData);

  return (
    <>
      <StatisticsContainer>
        <h2>Statistics</h2>
        {statistics && (
          <>
            {statistics?.totalIncome || statistics?.totalExpenses ? (
              statistics?.totalExpenses ? (
                <Chart statistics={statistics} />
              ) : (
                <p>There are no expenses in the selected period</p>
              )
            ) : null}
          </>
        )}
        <TableContainer>
          <Selectors />
          <Table statistics={statistics} />
        </TableContainer>
      </StatisticsContainer>
    </>
  );
}

export default DiagramTab;
