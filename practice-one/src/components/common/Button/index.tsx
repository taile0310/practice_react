// CSS
import "./button.css";

// Type
import { CustomBtnProps } from "../../../types";
import React from "react";

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
