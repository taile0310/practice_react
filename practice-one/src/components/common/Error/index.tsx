// React
import { FC, ReactElement, memo } from "react";

type TError = {
  className?: string;
  content: string;
};

const Error: FC<TError> = ({ className, content }): ReactElement => {
  return <p className={className}>{content}</p>;
};

export default memo(Error);
