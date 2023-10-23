// CSS
import "./input.css";

// Type
import { CustomInputProps } from "../../../types";
import React from "react";

// Component Input
const Input: React.FC<CustomInputProps> = ({
  placeholder,
  className,
  value,
  onChange,
}) => {
  return (
    <input
      className={className}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
