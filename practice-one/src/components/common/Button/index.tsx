// CSS
import { TButtonSize } from "../../../types/TButton/TButtonSize";
import { TButtonText } from "../../../types/TButton/TButtonText";
import { TVariant } from "../../../types/TVariant";
import "./button.css";

// Type
import React, { MouseEventHandler } from "react";

type CustomBtnProps = {
  textBtn?: string;
  className?: string;
  disabled?: boolean;
  size?: TButtonSize;
  variants?: TVariant;
  typeText?: TButtonText;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

// Component Button
const Button: React.FC<CustomBtnProps> = ({
  className,
  textBtn,
  disabled,
  variants,
  size,
  typeText,
  onClick,
}) => {
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
