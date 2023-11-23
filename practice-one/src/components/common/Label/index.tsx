// React
import React, { LabelHTMLAttributes } from "react";

export interface CustomLabelProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  titleLabel: string;
}

const Label: React.FC<CustomLabelProps> = ({
  className,
  titleLabel,
}): React.ReactElement => {
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
