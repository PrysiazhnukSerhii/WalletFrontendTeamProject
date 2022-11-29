import { Box } from 'components/Box';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import Notiflix from 'notiflix';
import { Chart } from 'components/chart/chart';
import { Table } from 'components/table/table';
import { useGetStatisticsMutation } from 'redux/transactionsSlice';
import { StatisticsContainer } from './diagramTam.styled';

const initialValues = {
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
};

export function DiagramTab() {
  const statistics = useSelector(state => state.userInformation.financeData);
  const [month, setMonth] = useState(initialValues.month);
  const [year, setYear] = useState(initialValues.year);

  const [getStatistics] = useGetStatisticsMutation();

  useEffect(() => {
    getStatistics({ month, year });
  }, [month, year, getStatistics]);

  console.log(statistics);

  const handleMonthChange = e => {
    setMonth(Number(e.currentTarget.value));
  };
  const handleYearChange = e => {
    setYear(Number(e.currentTarget.value));
  };

  return (
    <>
      <StatisticsContainer>
        <h2>Statistics</h2>

        {statistics && (
          <>
            {(statistics?.totalIncome || statistics?.totalExpenses) &&
              (statistics?.totalExpenses ? (
                <Chart statistics={statistics} />
              ) : (
                <p>There are no expenses in the selected period</p>
              ))}

            <Table
              month={month}
              year={year}
              initialValues={initialValues}
              statistics={statistics}
              onMonthChange={handleMonthChange}
              onYearChange={handleYearChange}
            />
          </>
        )}
      </StatisticsContainer>
    </>
  );
}
