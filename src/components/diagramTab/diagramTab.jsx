// Из верстку тут оглавление и расположение дочерних элементов на сером фоне в зависимости от разрешения экрана
// В этом компоненте заключена логика подписки на redux store, получение оттуда всех нужных данных.
// Реализация методов фильтрации данных.И данные куски состояния и методы прокинуть пропами в дочерние элементы Table и Chart

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import Notiflix from 'notiflix';
import { Chart } from 'components/chart/chart';
import { Table } from 'components/table/table';
import { useGetStatisticsMutation } from 'redux/transactionsSlice';

const initialValues = {
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
};

export function DiagramTab() {
  // забираємо з redux store statistics
  // no tranactions
  // const statistics = {
  //   totalExpenses: 0,
  //   totalIncome: 0,
  //   totalCategories: [
  //     {
  //       id: '1',
  //       title: 'Main',
  //       color: '#FED057',
  //     },
  //     {
  //       title: 'Food',

  //       id: '2',
  //       color: '#FFD8D0',
  //     },
  //     {
  //       title: 'Auto',

  //       id: '3',
  //       color: '#FD9498',
  //     },
  //     {
  //       title: 'Development',

  //       id: '4',
  //       color: '#C5BAFF',
  //     },
  //     {
  //       id: '5',
  //       title: 'Children',
  //       color: '#6E78E8',
  //     },
  //     {
  //       title: 'House',

  //       id: '6',
  //       color: '#4A56E2',
  //     },
  //     {
  //       title: 'Education',

  //       id: '7',
  //       color: '#81E1FF',
  //     },
  //     {
  //       id: '8',
  //       title: 'Reset',
  //       color: '#24CCA7',
  //     },
  //     {
  //       id: '9',
  //       title: 'Other',
  //       color: '#00AD84',
  //     },
  //   ],
  // };

  // all data
  // const statistics = {
  //   totalExpenses: 5200.53,
  //   totalIncome: 15000,
  //   totalCategories: [
  //     {
  //       id: '1',
  //       title: 'Main',
  //       color: '#FED057',
  //     },
  //     {
  //       title: 'Food',
  //       total: 300,
  //       id: '2',
  //       color: '#FFD8D0',
  //     },
  //     {
  //       title: 'Auto',
  //       total: 900,
  //       id: '3',
  //       color: '#FD9498',
  //     },
  //     {
  //       title: 'Development',
  //       total: 1000,
  //       id: '4',
  //       color: '#C5BAFF',
  //     },
  //     {
  //       id: '5',
  //       title: 'Children',
  //       color: '#6E78E8',
  //     },
  //     {
  //       title: 'House',
  //       total: 2000,
  //       id: '6',
  //       color: '#4A56E2',
  //     },
  //     {
  //       title: 'Education',
  //       total: 1000.53,
  //       id: '7',
  //       color: '#81E1FF',
  //     },
  //     {
  //       id: '8',
  //       title: 'Reset',
  //       color: '#24CCA7',
  //     },
  //     {
  //       id: '9',
  //       title: 'Other',
  //       color: '#00AD84',
  //     },
  //   ],
  // };

  // no income
  // const statistics = {
  //   totalExpenses: 5200.53,
  //   totalIncome: 0,
  //   totalCategories: [
  //     {
  //       id: '1',
  //       title: 'Main',
  //       color: '#FED057',
  //     },
  //     {
  //       title: 'Food',
  //       total: 300,
  //       id: '2',
  //       color: '#FFD8D0',
  //     },
  //     {
  //       title: 'Auto',
  //       total: 900,
  //       id: '3',
  //       color: '#FD9498',
  //     },
  //     {
  //       title: 'Development',
  //       total: 1000,
  //       id: '4',
  //       color: '#C5BAFF',
  //     },
  //     {
  //       id: '5',
  //       title: 'Children',
  //       color: '#6E78E8',
  //     },
  //     {
  //       title: 'House',
  //       total: 2000,
  //       id: '6',
  //       color: '#4A56E2',
  //     },
  //     {
  //       title: 'Education',
  //       total: 1000.53,
  //       id: '7',
  //       color: '#81E1FF',
  //     },
  //     {
  //       id: '8',
  //       title: 'Reset',
  //       color: '#24CCA7',
  //     },
  //     {
  //       id: '9',
  //       title: 'Other',
  //       color: '#00AD84',
  //     },
  //   ],
  // };

  // no expenses
  // const statistics = {
  //   totalExpenses: 0,
  //   totalIncome: 15000,
  //   totalCategories: [
  //     {
  //       id: '1',
  //       title: 'Main',
  //       color: '#FED057',
  //     },
  //     {
  //       title: 'Food',

  //       id: '2',
  //       color: '#FFD8D0',
  //     },
  //     {
  //       title: 'Auto',

  //       id: '3',
  //       color: '#FD9498',
  //     },
  //     {
  //       title: 'Development',

  //       id: '4',
  //       color: '#C5BAFF',
  //     },
  //     {
  //       id: '5',
  //       title: 'Children',
  //       color: '#6E78E8',
  //     },
  //     {
  //       title: 'House',

  //       id: '6',
  //       color: '#4A56E2',
  //     },
  //     {
  //       title: 'Education',

  //       id: '7',
  //       color: '#81E1FF',
  //     },
  //     {
  //       id: '8',
  //       title: 'Reset',
  //       color: '#24CCA7',
  //     },
  //     {
  //       id: '9',
  //       title: 'Other',
  //       color: '#00AD84',
  //     },
  //   ],
  // };

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
    </>
  );
}
