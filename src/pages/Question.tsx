import QuestionaireTable from "../components/QuestionaireTable";
import "./styles/question.scss";

export interface QuestionProps {}

const Question: React.FC<QuestionProps> = () => {
  return (
    <div className="question">
      <h2>Quick Survey</h2>
      <p className="question__instructions">
        <span>Instructions: </span>
        Below is a list of problems that people sometimes have in response to a very stressful
        experience. Please read each problem carefully and then circle one of the numbers to the
        right to indicate how much you have been bothered by that problem{" "}
        <span>in the past month.</span>
      </p>

      <QuestionaireTable />
    </div>
  );
};

export default Question;
