import "./styles/header.scss";

export interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return <h2 className="header">{title}</h2>;
};

export default Header;
