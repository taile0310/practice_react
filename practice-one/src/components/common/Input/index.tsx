// CSS
import "./Input.css";

// React
import { FC, InputHTMLAttributes, ReactElement, memo } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: FC<CustomInputProps> = memo(
  ({ className, ...prop }): ReactElement => {
    return <input className={className} {...prop} />;
  }
);

export default Input;
