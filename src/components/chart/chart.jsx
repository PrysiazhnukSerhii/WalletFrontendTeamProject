// Верстка мобилка, планшет, десктоп
// react-chartjs-2 и chart.js разобраться и применить библиотеки
// Stateless компонент получает информацию для рендера
// Отображаемая сумма равна сумме всех расходов за выбранный период
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ChartWrapper, ChartBalInfo } from './chart.styled';

ChartJS.register(ArcElement, Tooltip);

export function Chart({ statistics }) {
  const { totalExpenses, totalCategories } = statistics;
  const data = {
    labels: totalCategories.map(category => category.title),
    datasets: [
      {
        label: 'Statistics',
        data: totalCategories.map(category =>
          category.total ? category.total : 0
        ),
        backgroundColor: totalCategories.map(category => category.color),
        borderWidth: 0,
        cutout: 100,
      },
    ],
  };
  return (
    <>
      <ChartWrapper
      // style={{
      //   margin: 8,
      //   width: '288px',
      //   heigth: '288px',
      // }}
      >
        <Doughnut data={data} />
      </ChartWrapper>
      <ChartBalInfo>{` ₴ ${totalExpenses}`}</ChartBalInfo>
    </>
  );
}
