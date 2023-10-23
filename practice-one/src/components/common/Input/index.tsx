// CSS
import "./input.css";

// Type
import React, { ChangeEventHandler } from "react";

type CustomInputProps = {
  placeholder?: string;
  className?: string;
  type?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
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
