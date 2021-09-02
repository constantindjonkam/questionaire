import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

import "./styles/result.scss";
import LineChart from "../components/LineChart";
import { getUserResults, UserResult } from "../firebase";
import ResultCard from "../components/ResultCard";
import hypertension from "../assets/hypertension.jpg";
import cognition from "../assets/cognition.jpg";
import instrusions from "../assets/instrusions.jpg";
import avoidance from "../assets/avoidance.jpg";

const Result: React.FC = () => {
  const [data, setData] = useState({} as UserResult);
  const params = useParams();

  useEffect(() => {
    (async () => {
      const res = await getUserResults((params as { id: string }).id);
      setData(res[0]);
    })();
  }, [params]);

  const colorDeterminer = () => {
    if (data.total > 50) return "red";
    else if (data.total > 25) return "blue";
    return "green";
  };

  const severityDeterminer = () => {
    if (data.total > 50) return "High";
    else if (data.total > 25) return "Medium";
    return "Low";
  };

  // const resultDeterminer = () => {
  //   if (data.total > 50) return "High";
  //   else if (data.total > 25) return "Medium";
  //   return "Low";
  // };

  return (
    <div className="result">
      <Header title="Latest Result" />
      <p>Base on the data collected we were able to determine the following scores:</p>
      <div className="result__grid">
        <ResultCard title="Avoidance" image={avoidance} value={data.avoidance} />
        <ResultCard title="Intrusions" image={instrusions} value={data.intrusions} />
        <ResultCard title="Cognitions" image={cognition} value={data.cognitions} />
        <ResultCard title="Hypervigilance" image={hypertension} value={data.hypervigilance} />
      </div>
      <div className="result__total">
        <p>
          Total:
          <span style={{ color: colorDeterminer() }}>{data.total}</span>
        </p>
        <p>
          Health Severity: <span style={{ color: colorDeterminer() }}>{severityDeterminer()}</span>
        </p>
      </div>
      <p>
        You got an avoidance score of {data.avoidance}. This means you have higher chances of...
      </p>
      <LineChart />
    </div>
  );
};

export default Result;
