// CSS
import "./Button.css";

// Component
import { CustomBtnProps } from "../../../types";

// Component Button
const Button = ({
  className,
  textBtn,
  disabled,
  variants,
  size,
  typeText,
  onClick,
}: CustomBtnProps) => {
  return (
    <button
      className={`btn btn-${variants} btn-${size} ${className} text-${typeText}`}
      onClick={onClick}
      disabled={disabled}>
      {textBtn}
    </button>
  );
};

export default Button;
