// CSS
import "./Button.css";

// React
import { ButtonHTMLAttributes, FC, ReactElement, ReactNode, memo } from "react";

// Type
import { TButtonSize, TButtonText, VARIANT } from "../../../types";

export interface CustomBtnProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  size?: TButtonSize;
  variants?: VARIANT;
  typeText?: TButtonText;
}

const Button: FC<CustomBtnProps> = memo(
  ({
    className,
    children,
    variants = VARIANT.PRIMARY,
    size,
    typeText,
    ...prop
  }): ReactElement => {
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
