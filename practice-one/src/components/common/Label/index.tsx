// React
import { FC, LabelHTMLAttributes, ReactElement } from "react";

// Define props for label
export interface CustomLabelProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  titleLabel: string;
}
const Label: FC<CustomLabelProps> = ({
  className,
  titleLabel,
}): ReactElement => {
  return (
    <>
      <label className={className}>{titleLabel}</label>
      {titleLabel === "Description" || titleLabel === "Payment Method" ? (
        ""
      ) : (
        <span className="required-input">*</span>
      )}
    </>
  );
};

export default Label;
