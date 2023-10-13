import { CustomLabelProps } from "../../../types/interface";

const Label = ({ className, titleLabel }: CustomLabelProps) => {
  return (
    <label className={className}>
      {titleLabel}
      <span className="required-input"> *</span>
    </label>
  );
};

export default Label;
