import { useState } from "react";
import { useHistory } from "react-router-dom";

import "./styles/questionaireTable.scss";
import TableBody, { ResultProp } from "./TableBody";
import { getAllQuestions } from "../services/questionsData";
import { addResult } from "../services/userResults";

const QuestionaireTable: React.FC = () => {
  const [answers, setAnswers] = useState([] as ResultProp[]);
  const history = useHistory();

  const handleSubmit = () => {
    if (getAllQuestions().length !== answers.length)
      return alert("You must complete all the questions");

    const username = prompt("Please enter your username");
    if (!username?.trim())
      return alert("You must enter a username to link your result to the database");

    addResult(username || "", answers);
    history.push("/result/" + username);
  };

  return (
    <>
      <div className="questionaireTable__container">
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
      </div>
      <div onClick={handleSubmit} className="button">
        Submit
      </div>
    </>
  );
};

export default QuestionaireTable;
