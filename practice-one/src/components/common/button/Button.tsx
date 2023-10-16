// CSS
import "./button.css";

// Component
import { CustomBtnProps } from "../../../types/interface";

// Component Button
const Button = ({
  className,
  textBtn,
  isHomePage,
  onClick,
  disabled,
}: CustomBtnProps) => {
  // Determine the className based on whether it is isHomePage
  const buttonClassName = isHomePage ? "btn-primary" : "btn-secondary";
  return (
    <button
      className={`${buttonClassName} ${className}`}
      font-family
      onClick={onClick}
      disabled={disabled}>
      {textBtn}
    </button>
  );
};

export default Button;
