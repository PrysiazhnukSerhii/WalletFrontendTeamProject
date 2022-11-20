// Из верстку тут оглавление и расположение дочерних элементов на сером фоне в зависимости от разрешения экрана
// В этом компоненте заключена логика подписки на redux store, получение оттуда всех нужных данных.
// Реализация методов фильтрации данных.И данные куски состояния и методы прокинуть пропами в дочерние элементы Table и Chart

import { Chart } from 'components/chart/chart';
import { Table } from 'components/table/table';

// export async function getCategoties(period) {
//   const { data } = await axios.post(`/statistics`, period);
//   return data;
// }
// export async function getStatistics() {
//   const { data } = await axios.post(`/categories`);
//   return data;
// }
export function DiagramTab() {
  // const categories = useSelector(getCategoriesValue);
  // const statististics = useSelector(getStatisticsValue);
  // const dispatch = useDispatch();
  // забираємо з redux store
  const categories = [
    {
      id: '1',
      title: 'Main',
    },
    {
      id: '2',
      title: 'Food',
    },
    {
      id: '3',
      title: 'Auto',
    },
    {
      id: '4',
      title: 'Development',
    },
    {
      id: '5',
      title: 'Children',
    },
    {
      id: '6',
      title: 'House',
    },
    {
      id: '7',
      title: 'Education',
    },
    {
      id: '8',
      title: 'Reset',
    },
    {
      id: '9',
      title: 'Other',
    },
  ];
  // забираємо з redux store
  const statistics = {
    totalExpenses: 5200.53,
    totalIncome: 15000,
    totalCategories: [
      {
        category: 'House',
        total: 2000,
      },
      {
        category: 'Food',
        total: 300,
      },
      {
        category: 'Development',
        total: 1000,
      },
      {
        category: 'Education',
        total: 1000.53,
      },
      {
        category: 'Auto',
        total: 900,
      },
    ],
  };

  return (
    <>
      <h2>Statistics</h2>
      <Chart statistics={statistics} />
      <Table categories={categories} statistics={statistics} />
    </>
  );
}
