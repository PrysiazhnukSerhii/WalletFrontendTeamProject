import Notiflix from 'notiflix';
import { useSelector } from 'react-redux';
import { Chart } from 'components/chart/chart';
import { Table } from 'components/table/table';
import { useGetStatisticsMutation } from 'redux/transactionsSlice';
import { StatisticsContainer, TableContainer } from './diagramTab.styled';
import { Selectors } from 'components/selectors/selectors';

export function DiagramTab() {
  const statistics = useSelector(state => state.userInformation.financeData);

  const [getStatistics, { isSuccess }] = useGetStatisticsMutation();

  Notiflix.Notify.merge({
    timeout: 4000,
    width: '300 px',
    useIcon: true,
    fontSize: '12px',
    distance: '90px',
    clickToClose: true,
  });

  const handlePeriodChange = period => {
    getStatistics(period).then(({ data }) => {
      const { totalExpenses, totalIncome } = data[0];
      if (!totalExpenses && !totalIncome) {
        Notiflix.Notify.warning(
          'There are no transactions in the selected period'
        );
      }
    });
  };

  return (
    <>
      <StatisticsContainer>
        <h2>Statistics</h2>
        {statistics && isSuccess && (
          <>
            {statistics?.totalIncome || statistics?.totalExpenses ? (
              statistics?.totalExpenses ? (
                <Chart statistics={statistics} />
              ) : (
                <p>There are no expenses in the selected period</p>
              )
            ) : null}
            <TableContainer>
              <Selectors onChange={handlePeriodChange} />
              <Table statistics={statistics} isSuccess={isSuccess} />
            </TableContainer>
          </>
        )}
      </StatisticsContainer>
    </>
  );
}

export default DiagramTab;
