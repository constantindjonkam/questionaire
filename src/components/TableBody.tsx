import { FormEvent } from "react";

import { getAllQuestions } from "../services/questionsData";

export interface TableBodyProps {
  answers: ResultProp[];
  setAnswers: (result: ResultProp[]) => void;
}

export interface ResultProp {
  name: string;
  value: string;
}

const TableBody: React.FC<TableBodyProps> = ({ answers, setAnswers }) => {
  const handleChange = (event: FormEvent<HTMLTableRowElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    const newAnswers = answers.filter((ans) => ans.name !== name);

    newAnswers.push({ name, value });
    setAnswers(newAnswers);
  };

  return (
    <tbody>
      {getAllQuestions().map((question, i) => (
        <tr key={i} onChange={handleChange}>
          <td>
            <p className="questionaireTable__questions">{question}</p>
          </td>
          {[...Array(5)].map((v, j) => (
            <td key={j}>
              <input
                type="radio"
                name={`question${i + 1}`}
                value={`${j}`}
                className="questionaireTable__input"
              />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
