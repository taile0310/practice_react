// React
import React from "react";

// Image
import { Spinner } from "../../../assets/image";

// Component
import { Image } from "..";

const Loading: React.FC = (): React.ReactElement => {
  return (
    <div className="spinner">
      <Image src={Spinner} />
    </div>
  );
};

export default Loading;
