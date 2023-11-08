// CSS

import "./Button.css";

// React
import React, { ButtonHTMLAttributes, ReactNode, memo } from "react";

// Type
import { TButtonSize } from "../../../types/Button/Size";
import { TButtonText } from "../../../types/Button/Text";
import { VARIANT } from "../../../types/Variant";

interface CustomBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className: string;
  size?: TButtonSize;
  variants?: VARIANT;
  typeText?: TButtonText;
}

// Component Button
const Button: React.FC<CustomBtnProps> = memo(
  ({
    className,
    children,
    variants = VARIANT.PRIMARY,
    size,
    typeText,
    ...prop
  }): React.ReactElement => {
    return (
      <button
        {...prop} 
        className={`btn btn-${variants} btn-${size} ${className} text-${typeText}`}>
        {children}
      </button>
    );
  }
);

export default Button;
