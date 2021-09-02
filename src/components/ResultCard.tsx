import { resultColorDeterminer } from "../utils/determiners";
import "./styles/resultCard.scss";

export interface ResultCardProps {
  image: string;
  title: string;
  value: number;
}

const ResultCard: React.FC<ResultCardProps> = ({ image, title, value }) => {
  return (
    <div className="resultCard">
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p className="resultCard__value" style={resultColorDeterminer(value)}>
          {value}
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
