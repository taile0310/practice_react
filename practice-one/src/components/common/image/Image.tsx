// CSS
import "./image.css";

// Interface
import { CustomImageProps } from "../../../types/interface";

// Component Image
const Image = ({ src, alt, className, onClick }: CustomImageProps) => {
  return (
    <>
      <img className={className} src={src} alt={alt} onClick={onClick} />
    </>
  );
};

export default Image;
