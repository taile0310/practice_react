import { CustomInputProps } from "../../../types/interface";
import "./input.css";

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
      <div className="message"></div>
    </>
  );
};

export default Input;
