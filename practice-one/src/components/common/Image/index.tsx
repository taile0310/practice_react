// CSS
import "./image.css";

// Type
import { CustomImageProps } from "../../../types";

// Component Image
const Image = ({ src, alt, className, onClick }: CustomImageProps) => {
  return (
    <>
      <img className={className} src={src} alt={alt} onClick={onClick} />
    </>
  );
};

export default Image;
