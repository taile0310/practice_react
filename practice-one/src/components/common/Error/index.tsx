// React
import { FC, ReactElement, memo } from "react";

// Define props for Error
type TError = {
  className?: string;
  content: string;
};

const Error: FC<TError> = ({ className, content }): ReactElement => {
  return <p className={className}>{content}</p>;
};

export default memo(Error);
