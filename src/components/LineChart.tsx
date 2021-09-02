import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";

import { getUserResults, UserResult } from "../firebase";
import { randomColors } from "../utils/randomColor";

export interface LineChartProps {}

const LineChart: React.FC<LineChartProps> = () => {
  const [result, setResult] = useState([] as UserResult[]);
  const params = useParams();

  useEffect(() => {
    (async () => {
      const res = await getUserResults((params as { id: string }).id);
      setResult(res);
    })();
  }, [params]);

  return (
    <div className="lineChart">
      <Line
        data={{
          labels: result.map((res, i) => new Date(res.created.seconds * 1000).toLocaleDateString()),
          datasets: [
            {
              label: "Survey result",
              data: result.map((res) => res.total),
              backgroundColor: randomColors(result.map((res) => res.total).length),
              borderColor: randomColors(result.map((res) => res.total).length),
              borderWidth: 1,
            },
          ],
        }}
        width={1000}
        height={400}
      />
      <p>You did great compared to last time!</p>
    </div>
  );
};

export default LineChart;
