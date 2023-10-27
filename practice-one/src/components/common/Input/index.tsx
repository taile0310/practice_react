// CSS
import "./input.css";

// React
import React, { ChangeEventHandler } from "react";

type CustomInputProps = {
  placeholder?: string;
  className?: string;
  type: string;
  name?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

// Component Input
const Input: React.FC<CustomInputProps> = ({
  placeholder,
  className,
  value,
  name,
  onChange,
}): React.ReactElement => {
  return (
    <input
      className={className}
      type="text"
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

export default Input;
