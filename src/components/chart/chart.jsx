import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

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
