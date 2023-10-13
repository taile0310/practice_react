import { CustomInputProps } from "../../../types/interface";
import "./input.css";

const Input = ({ placeholder, className }: CustomInputProps) => {
  return (
    <>
      <input className={className} type="text" placeholder={placeholder} />
      <div className="message"></div>
    </>
  );
};

export default Input;
