// CSS
import "./Input.css";

// interface
import { CustomInputProps } from "../../../types/interface";

// Component Input
const Input = ({
  placeholder,
  className,
  value,
  onChange,
  onBlur,
}: CustomInputProps) => {
  return (
    <>
      <input
        className={className}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
};

export default Input;
