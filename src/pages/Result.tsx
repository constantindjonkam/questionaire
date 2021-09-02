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
  const [results, setResults] = useState<UserResult[]>([]);
  const params = useParams();
  const latestResult = results[0];

  useEffect(() => {
    (async () => {
      const res = await getUserResults((params as { id: string }).id);
      setResults(res);
    })();
  }, [params]);

  const colorDeterminer = () => {
    if (latestResult.total > 50) return "red";
    else if (latestResult.total > 25) return "blue";
    return "green";
  };

  const severityDeterminer = () => {
    if (latestResult.total > 50) return "High";
    else if (latestResult.total > 25) return "Medium";
    return "Low";
  };

  const resultMessageDeterminer = () => {
    let resultMessage = "";
    const end =
      "You need to consult or follow a Doctor instructions immidiately. Failing to do so might result to Chronic illness, emotional problems or even death";

    if (results.length === 1)
      resultMessage += "You have successfully completed your first survey. ";
    if (latestResult.total > 50)
      resultMessage += "Your score shows that you are suffering from excessive stress. " + end;
    else if (latestResult.total > 25)
      resultMessage += "Your score shows that you are suffering from some stress. " + end;
    else
      resultMessage +=
        "Your score shows that you are quiet stressed up. It is at a beginning stage. You need to follow some recommended guidelines from a Doctor. Failing to do so might result into more serious stress and can lead to Chronic illness, emotional problems or even death";

    return resultMessage;
  };

  if (!results.length)
    return (
      <p>
        User data could not be determined. Make sure you have submitted a survey with the username
        specified in the URL
      </p>
    );

  return (
    <div className="result">
      <Header title="Latest Result" />
      <p>Base on the data collected we were able to determine the following scores:</p>
      <div className="result__grid">
        <ResultCard title="Avoidance" image={avoidance} value={latestResult.avoidance} />
        <ResultCard title="Intrusions" image={instrusions} value={latestResult.intrusions} />
        <ResultCard title="Cognitions" image={cognition} value={latestResult.cognitions} />
        <ResultCard
          title="Hypervigilance"
          image={hypertension}
          value={latestResult.hypervigilance}
        />
      </div>
      <div className="result__total">
        <p>
          Total:
          <span style={{ color: colorDeterminer() }}>{latestResult.total}</span>
        </p>
        <p>
          Health Severity: <span style={{ color: colorDeterminer() }}>{severityDeterminer()}</span>
        </p>
      </div>
      <p className="result__message">{resultMessageDeterminer()}</p>
      <LineChart result={results} />
    </div>
  );
};

export default Result;
