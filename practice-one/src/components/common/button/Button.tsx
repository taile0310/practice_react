import { CustomBtnProps } from "../../../types/interface";
import "./button.css";

const Button = ({
  className,
  textBtn,
  isHomePage,
  onClick,
}: CustomBtnProps) => {
  const buttonClassName = isHomePage ? "btn-primary" : "btn-secondary";
  return (
    <button
      className={`${buttonClassName} ${className}`}
      font-family
      onClick={onClick}
      >
      {textBtn}
    </button>
  );
};

export default Button;
