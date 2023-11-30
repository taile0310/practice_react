// CSS
import "./Image.css";

// React
import { FC, ImgHTMLAttributes, ReactElement, memo } from "react";

// Define for image
interface CustomImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

const Image: FC<CustomImageProps> = ({ className, ...prop }): ReactElement => {
  return <img className={className} {...prop} />;
};

export default memo(Image);
