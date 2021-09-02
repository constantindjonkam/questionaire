import { Line } from "react-chartjs-2";
import { UserResult } from "../firebase";

import { randomColors } from "../utils/randomColor";

export interface LineChartProps {
  result: UserResult[];
}

const LineChart: React.FC<LineChartProps> = ({ result }) => {
  const scoreComparator = () => {
    if (result.length < 2) return;

    if (result[0].total > result[1].total)
      return "You are experiencing an increased in stress. Please consult a doctor immidiately.";
    else if (result[0].total < result[1].total)
      return "You are starting to feel better. Please keep up!";

    return "No improvement on your health detected. Please consult a doctor immidiately to check if everything is alright.";
  };

  return (
    <div className="lineChart">
      <Line
        data={{
          labels: result
            .map((res, i) => new Date(res.created.seconds * 1000).toLocaleDateString())
            .reverse(),
          datasets: [
            {
              label: "Survey result history",
              data: result.map((res) => res.total).reverse(),
              backgroundColor: randomColors(result.map((res) => res.total).length),
              borderColor: randomColors(result.map((res) => res.total).length),
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
        {scoreComparator()}
      </p>
    </div>
  );
};

export default LineChart;
