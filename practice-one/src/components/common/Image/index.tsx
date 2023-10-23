// CSS
import "./image.css";

// Type
import { CustomImageProps } from "../../../types";
import React from "react";

// Component Image
const Image: React.FC<CustomImageProps> = ({
  src,
  alt,
  className,
  onClick,
}) => {
  return <img className={className} src={src} alt={alt} onClick={onClick} />;
};

export default Image;
