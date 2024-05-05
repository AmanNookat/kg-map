import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { observer } from "mobx-react-lite";
import { Pie } from "react-chartjs-2";
import regionStore from "../store/region-store";
ChartJS.register(ArcElement, Tooltip, Legend);

export const ChartCard = observer(() => {
  const { getRegion } = regionStore;
  let chartData;

  const labels = getRegion()?.districts.map((elem) => elem.title);
  const populations = getRegion()?.districts.map((elem) => elem.population);

  chartData = {
    labels: labels,
    datasets: [
      {
        data: populations,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "#20B2AA",
          "#6A5ACD",
          "#FF00FF",
          "#DC143C",
          "#3CB371",
        ],
      },
    ],
  };

  const population = getRegion().districts.reduce((acc, cur) => {
    return acc + cur.population;
  }, 0);

  return (
    <div className="chart">
      <h2>{getRegion().name}</h2>
      <p>Население: {population}</p>
      <Pie data={chartData} />
    </div>
  );
});
