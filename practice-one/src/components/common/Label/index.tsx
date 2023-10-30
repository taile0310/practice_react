// React
import React from "react";

export type CustomLabelProps = {
  className?: string;
  titleLabel: string;
};

// Component Label
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
