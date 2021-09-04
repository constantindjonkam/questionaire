import useUserResults from "../hooks/useUserResults";
import Header from "../components/Header";
import LineChart from "../components/LineChart";
import ResultCard from "../components/ResultCard";
import Loader from "../components/Loader";
import { colorDeterminer, resultMessageDeterminer, severityDeterminer } from "../utils/determiners";
import hypertension from "../assets/hypertension.jpg";
import cognition from "../assets/cognition.jpg";
import instrusions from "../assets/instrusions.jpg";
import avoidance from "../assets/avoidance.jpg";
import "./styles/result.scss";

const Result: React.FC = () => {
  const { results, latestResult } = useUserResults();

  if (results === null) return <Loader />;

  if (!results.length || !latestResult)
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
          <span style={{ color: colorDeterminer(latestResult) }}>{latestResult.total}</span>
        </p>
        <p>
          Health Severity:{" "}
          <span style={{ color: colorDeterminer(latestResult) }}>
            {severityDeterminer(latestResult)}
          </span>
        </p>
      </div>
      <p className="result__message">{resultMessageDeterminer(results, latestResult)}</p>
      <LineChart results={results} />
    </div>
  );
};

export default Result;
