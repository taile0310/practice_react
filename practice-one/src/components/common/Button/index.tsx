// CSS

import "./Button.css";

// React
import React, { MouseEventHandler, memo } from "react";

// Type
import { TButtonSize } from "../../../types/Button/Size";
import { TButtonText } from "../../../types/Button/Text";
import { TVariant } from "../../../types/Variant";

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
const Button: React.FC<CustomBtnProps> = memo(
  ({
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
  }
);

export default Button;
