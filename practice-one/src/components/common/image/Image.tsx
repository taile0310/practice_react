import "./image.css";
import { CustomImageProps } from "../../../types/interface";

const Image = ({ src, alt, className, onClick }: CustomImageProps) => {
  return (
    <>
      <img className={className} src={src} alt={alt} onClick={onClick} />
    </>
  );
};

export default Image;
