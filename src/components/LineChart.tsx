import { Line } from "react-chartjs-2";
import { getAllTypes } from "../services/questionsData";

export interface LineChartProps {}

const LineChart: React.FC<LineChartProps> = () => {
  return (
    <div className="lineChart">
      <Line
        data={{
          labels: getAllTypes(),
          datasets: [
            {
              label: "Survey result",
              data: [12, 19, 3, 5],
              backgroundColor: [
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
              borderColor: [
                "rgba(54, 162, 235, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        width={1000}
        height={400}
      />
    </div>
  );
};

export default LineChart;
