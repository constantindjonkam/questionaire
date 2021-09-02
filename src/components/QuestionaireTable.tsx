import { useState } from "react";
import { useHistory } from "react-router-dom";

import "./styles/questionaireTable.scss";
import TableBody, { ResultProp } from "./TableBody";
import { getAllQuestions } from "../services/questionsData";
import { addResult } from "../firebase";

export interface QuestionaireTableProps {}

const QuestionaireTable: React.FC<QuestionaireTableProps> = () => {
  const [answers, setAnswers] = useState([] as ResultProp[]);
  const history = useHistory();

  const handleSubmit = () => {
    if (getAllQuestions().length !== answers.length)
      return alert("You must complete all the questions");

    const total = answers.reduce((a, c) => Number(c.value) + a, 0);
    // const avoidance = answers;
    addResult("gostar", answers, total);
    history.push("/result");
  };

  return (
    <>
      <table className="questionaireTable">
        <thead>
          <tr>
            <th>
              <p>In the past month, how much were you bothered by:</p>
            </th>
            <th>
              <p>Not at all</p>
            </th>
            <th>
              <p>A liitle bit</p>
            </th>
            <th>
              <p>Moderately</p>
            </th>
            <th>
              <p>Quite a bit</p>
            </th>
            <th>
              <p>Extremely</p>
            </th>
          </tr>
        </thead>
        <TableBody answers={answers} setAnswers={setAnswers} />
      </table>
      <div onClick={handleSubmit} className="button">
        Submit
      </div>
    </>
  );
};

export default QuestionaireTable;
