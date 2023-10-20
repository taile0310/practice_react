// interface
import { CustomLabelProps } from "../../../types";

// Component Label
const Label = ({ className, titleLabel }: CustomLabelProps) => {
  return (
    <>
      <label className={className}>{titleLabel}</label>
      {titleLabel === "Description" || titleLabel === "Payment Method" ? (
        ""
      ) : (
        <span className="required-input"> *</span>
      )}
    </>
  );
};

export default Label;
