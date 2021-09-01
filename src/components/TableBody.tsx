import { FormEvent } from "react";

import questionsData from "../services/questionsData";

export interface TableBodyProps {}

const TableBody: React.FC<TableBodyProps> = () => {
  const handleChange = (event: FormEvent<HTMLTableRowElement>) => {
    console.log((event.target as any).value, (event.target as any).name);
  };

  return (
    <tbody>
      {questionsData.map(({ questions }) =>
        questions.map((question, i) => (
          <tr key={i} onChange={handleChange}>
            <td>
              <p className="questionaireTable__questions">{question}</p>
            </td>
            <td>
              <input
                type="radio"
                name={`answer${i}`}
                value="not_at_all"
                className="questionaireTable__input"
              />
            </td>
            <td>
              <input
                type="radio"
                name={`answer${i}`}
                value="a_little_bit"
                className="questionaireTable__input"
              />
            </td>
            <td>
              <input
                type="radio"
                name={`answer${i}`}
                value="moderately"
                className="questionaireTable__input"
              />
            </td>
            <td>
              <input
                type="radio"
                name={`answer${i}`}
                value="quite_a_bit"
                className="questionaireTable__input"
              />
            </td>
            <td>
              <input
                type="radio"
                name={`answer${i}`}
                value="extremely"
                className="questionaireTable__input"
              />
            </td>
          </tr>
        ))
      )}
    </tbody>
  );
};

export default TableBody;
