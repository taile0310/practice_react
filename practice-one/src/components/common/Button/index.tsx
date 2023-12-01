// CSS
import "./Button.css";

// React
import { ButtonHTMLAttributes, FC, ReactElement, ReactNode, memo } from "react";

// Type
import { VARIANT } from "../../../types";

// Define props for button
interface CustomBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  size?: TButtonSize;
  variants?: VARIANT;
  typeText?: TButtonText;
}
type TButtonText = "uppercase" | "capitalize";
type TButtonSize = "xl" | "lg" | "md" | "sm" | "xs";

const Button: FC<CustomBtnProps> = ({
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
};
export default memo(Button);
