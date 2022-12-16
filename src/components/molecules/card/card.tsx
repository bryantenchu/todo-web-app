import { FC } from "react";
import "./card.scss";
import Checkbox from "../../atoms/checkbox/checkbox";
import Button from "../../atoms/button/button";

interface CardProps {
  title: string;
}

const Card: FC<CardProps> = ({ title }) => {
  return (
    <div className="card">
      <Checkbox title={title} isChecked={true} handleCheck={() => {}} />
      <Button onClick={() => {}}>Eliminar</Button>
    </div>
  );
};

export default Card;
