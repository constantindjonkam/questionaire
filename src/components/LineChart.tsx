import { Line } from "react-chartjs-2";

import { UserResult } from "../services/userResults";
import { scoreComparator } from "../utils/determiners";
import { randomColors } from "../utils/randomColor";

export interface LineChartProps {
  results: UserResult[];
}

const LineChart: React.FC<LineChartProps> = ({ results }) => {
  return (
    <div className="lineChart">
      <Line
        data={{
          labels: results
            .map((res, i) => new Date(res.created?.seconds * 1000).toLocaleDateString())
            .reverse(),
          datasets: [
            {
              label: "Survey result history",
              data: results.map((res) => res.total).reverse(),
              backgroundColor: randomColors(results.map((res) => res.total).length),
              borderColor: randomColors(results.map((res) => res.total).length),
              borderWidth: 1,
            },
          ],
        }}
        width={1000}
        height={400}
      />
      <p
        className="lineChart__message"
        style={{ marginTop: 40, color: "tomato", textAlign: "center" }}
      >
        {scoreComparator(results)}
      </p>
    </div>
  );
};

export default LineChart;
