// CSS
import "./button.css";

// Component
import { CustomBtnProps } from "../../../types/interface";

// Component Button
const Button = ({
  className,
  textBtn,
  onClick,
  disabled,
  variants,
}: CustomBtnProps) => {
  // Determine the className based on whether it is isHomePage
  const buttonClassName = variants ? " btn-primary" : " btn-secondary";
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
