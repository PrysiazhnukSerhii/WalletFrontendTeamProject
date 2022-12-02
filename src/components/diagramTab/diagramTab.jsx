import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Chart } from 'components/chart/chart';
import { Table } from 'components/table/table';
import { useGetStatisticsMutation } from 'redux/transactionsSlice';
import { StatisticsContainer } from './diagramTab.styled';

const initialValues = {
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
};

export function DiagramTab() {
  const statistics = useSelector(state => state.userInformation.financeData);
  const [month, setMonth] = useState(initialValues.month);
  const [year, setYear] = useState(initialValues.year);

  const [getStatistics, { isSuccess }] = useGetStatisticsMutation();

  Notiflix.Notify.merge({
    timeout: 4000,
    width: '300 px',
    useIcon: true,
    fontSize: '12px',
    distance: '90px',
    clickToClose: true,
  });
  useEffect(() => {
    getStatistics({ month, year }).then(({ data }) => {
      const { totalExpenses, totalIncome } = data[0];
      if (!totalExpenses && !totalIncome) {
        Notiflix.Notify.warning(
          'There are no transactions in the selected period'
        );
      }
    });
  }, [month, year, getStatistics]);

  const handleMonthChange = e => {
    setMonth(Number(e[0].value));
  };
  const handleYearChange = e => {
    setYear(Number(e[0].value));
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

            <Table
              month={month}
              year={year}
              initialValues={initialValues}
              statistics={statistics}
              onMonthChange={handleMonthChange}
              onYearChange={handleYearChange}
              isSuccess={isSuccess}
            />
          </>
        )}
      </StatisticsContainer>
    </>
  );
}

export default DiagramTab;
