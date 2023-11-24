// React
import { FC, ReactElement, memo } from "react";

type TError = {
  className?: string;
  content: string;
};

const Error: FC<TError> = memo(({ className, content }): ReactElement => {
  return <p className={className}>{content}</p>;
});

export default Error;
