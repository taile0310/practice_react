// CSS
import "./Input.css";

// React
import { FC, InputHTMLAttributes, ReactElement, memo } from "react";

// Define props for input
interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: FC<CustomInputProps> = ({ className, ...prop }): ReactElement => {
  return <input className={className} {...prop} />;
};

export default memo(Input);
