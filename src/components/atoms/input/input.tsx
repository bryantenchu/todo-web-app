import { FC } from "react";
import "./input.scss";

interface InputProps {
  value: string;
  name: string;
  onChange: () => void;
  placeholder: string;
}

const Input: FC<InputProps> = ({ name, onChange, placeholder, value }) => {
  return <input className="input" placeholder={placeholder} />;
};

export default Input;
