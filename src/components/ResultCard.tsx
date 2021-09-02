import "./styles/resultCard.scss";

export interface ResultCardProps {
  image: string;
  title: string;
  value: number;
}

const ResultCard: React.FC<ResultCardProps> = ({ image, title, value }) => {
  const resultColorDeterminer = () => {
    if (value >= 10) return { color: "white", backgroundColor: "red" };
    if (value >= 5) return { color: "black", backgroundColor: "yellow" };
    return { color: "white", backgroundColor: "green" };
  };

  return (
    <div className="resultCard">
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p className="resultCard__value" style={resultColorDeterminer()}>
          {value}
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
