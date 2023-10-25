// Image
import { Spinner } from "../../../assets/image";

// Component
import { Image } from "..";
import React from "react";

// Component Loading
const Loading: React.FC = (): React.ReactElement => {
  return (
    <div className="spinner">
      <Image src={Spinner} />
    </div>
  );
};

export default Loading;
