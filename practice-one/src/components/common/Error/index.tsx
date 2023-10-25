import React from "react";

type TError = {
  className?: string;
  content: string;
};

const Error: React.FC<TError> = ({
  className,
  content,
}): React.ReactElement => {
  return <p className={className}>{content}</p>;
};

export default Error;
