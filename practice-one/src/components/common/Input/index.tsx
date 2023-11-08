// CSS
import "./Input.css";

// React
import React, { InputHTMLAttributes, memo } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

// Component Input
const Input: React.FC<CustomInputProps> = memo(
  ({ className, ...prop }): React.ReactElement => {
    return <input className={className} {...prop} />;
  }
);

export default Input;
