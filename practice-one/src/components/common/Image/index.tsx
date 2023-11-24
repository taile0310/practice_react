// CSS
import "./Image.css";

// React
import { FC, ImgHTMLAttributes, ReactElement, memo } from "react";

interface CustomImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

const Image: FC<CustomImageProps> = memo(
  ({ className, ...prop }): ReactElement => {
    return <img className={className} {...prop} />;
  }
);

export default Image;
