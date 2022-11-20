// Верстка мобилка, планшет, десктоп
// react-chartjs-2 и chart.js разобраться и применить библиотеки
// Stateless компонент получает информацию для рендера
// Отображаемая сумма равна сумме всех расходов за выбранный период
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

export function Chart({ statistics }) {
  const { totalExpenses, totalCategories } = statistics;
  const data = {
    labels: totalCategories.map(category => category.category),
    datasets: [
      {
        label: 'Statistics',
        data: totalCategories.map(category => category.total),
        backgroundColor: [
          '#FED057',
          '#FFD8D0',
          '#FD9498',
          '#C5BAFF',
          '#6E78E8',
          '#4A56E2',
          '#81E1FF',
          '#24CCA7',
          '#00AD84',
        ],
        borderWidth: 0,
      },
    ],
  };
  return (
    <>
      <div
        style={{
          margin: 8,
          width: '288px',
          heigth: '288px',
        }}
      >
        <Doughnut data={data} />
      </div>
      <p>{`TotalExpenses ₴ ${totalExpenses}`}</p>
    </>
  );
}
