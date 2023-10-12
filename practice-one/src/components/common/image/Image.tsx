import React from "react";
import "./image.css";
import { CustomImageProps } from "../../../types/interface";

const Image = ({ src, alt, className }: CustomImageProps) => {
  return <img className={className} src={src} alt={alt} />;
};

export default Image;
