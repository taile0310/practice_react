// CSS
import "./Image.css";

// React
import React, { ImgHTMLAttributes, memo } from "react";

interface CustomImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

const Image: React.FC<CustomImageProps> = memo(
  ({ className, ...prop }): React.ReactElement => {
    return <img className={className} {...prop} />;
  }
);

export default Image;
