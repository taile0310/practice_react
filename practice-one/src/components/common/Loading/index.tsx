// Image
import { Spinner } from "../../../assets/image";

// Component
import { Image } from "..";

// Component Loading
const Loading = () => {
  return (
    <div className="spinner">
      <Image src={Spinner} />
    </div>
  );
};

export default Loading;
