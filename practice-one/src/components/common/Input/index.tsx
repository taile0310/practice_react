// CSS
import "./input.css";

// Type
import { CustomInputProps } from "../../../types";

// Component Input
const Input = ({
  placeholder,
  className,
  value,
  onChange,
}: CustomInputProps) => {
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
