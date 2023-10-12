import { CustomLabelProps } from "../../../types/interface";

const Label = ({ className, titleLabel }: CustomLabelProps) => {
  return <label className={className}>{titleLabel}</label>;
};

export default Label;
