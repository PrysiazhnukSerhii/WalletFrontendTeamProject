// Из верстку тут оглавление и расположение дочерних элементов на сером фоне в зависимости от разрешения экрана
// В этом компоненте заключена логика подписки на redux store, получение оттуда всех нужных данных.
// Реализация методов фильтрации данных.И данные куски состояния и методы прокинуть пропами в дочерние элементы Table и Chart

import { Chart } from 'components/chart/chart';
import { Table } from 'components/table/table';

export function DiagramTab() {
  return (
    <>
      <h2>Statistics</h2>
      <Chart />
      <Table />
    </>
  );
}
