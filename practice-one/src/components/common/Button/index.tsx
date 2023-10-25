// CSS
import "./button.css";

// React
import React, { MouseEventHandler } from "react";

// Type
import { TButtonSize } from "../../../types/TButton/TButtonSize";
import { TButtonText } from "../../../types/TButton/TButtonText";
import { TVariant } from "../../../types/TVariant";

type CustomBtnProps = {
  textBtn?: string;
  className: string;
  disabled?: boolean;
  size?: TButtonSize;
  variants?: TVariant;
  typeText?: TButtonText;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

// Component Button
const Button: React.FC<CustomBtnProps> = ({
  className,
  textBtn,
  disabled,
  variants = "primary",
  size,
  typeText,
  onClick,
}): React.ReactElement => {
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
