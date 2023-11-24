// React
import { FC, ReactElement } from "react";

// Image
import { Spinner } from "../../../assets/image";

// Component
import { Image } from "..";

const Loading: FC = (): ReactElement => {
  return (
    <div className="spinner">
      <Image src={Spinner} />
    </div>
  );
};

export default Loading;
