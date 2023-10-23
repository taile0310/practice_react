// Type
import React from "react";
import { CustomLabelProps } from "../../../types";

// Component Label
const Label: React.FC<CustomLabelProps> = ({ className, titleLabel }) => {
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
