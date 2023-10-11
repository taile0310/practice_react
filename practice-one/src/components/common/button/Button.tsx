import { CustomBtnProps } from "../../../types/interface";
import "./button.css";

const Button = ({ className, textBtn, isHomePage }: CustomBtnProps) => {
  const buttonClassName = isHomePage ? "btn-primary" : "btn-secondary";
  return (
    <button className={`${buttonClassName} ${className}`} font-family>
      {textBtn}
    </button>
  );
};

export default Button;
