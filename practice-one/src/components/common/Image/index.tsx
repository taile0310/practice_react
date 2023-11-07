// CSS
import "./Image.css";

// React
import React, { MouseEventHandler, memo } from "react";

export type CustomImageProps = {
  src: string;
  alt?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
};

// Component Image
const Image: React.FC<CustomImageProps> = memo(
  ({ src, alt, className, onClick }): React.ReactElement => {
    return <img className={className} src={src} alt={alt} onClick={onClick} />;
  }
);

export default Image;
