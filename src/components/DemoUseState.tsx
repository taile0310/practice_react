import React, { useState } from "react";

const nameList = [
  { des: "John" },
  { des: "Mary" },
  { des: "Robert" },
  { des: "Linda" },
  { des: "Colin" },
  { des: "Smith" },
];

const Gallery: React.FunctionComponent = () => {
  const [index, setIndex] = useState(0);

  const hasPrev = index > 0;
  const hasNext = index < nameList.length - 1;

  const handlePrevClick = () => {
    if (hasPrev) {
      setIndex(index - 1);
    }
  };

  const handleNextClick = () => {
    if (hasNext) {
      setIndex(index + 1);
    }
  };

  const name = nameList[index];
  return (
    <>
      <button onClick={handlePrevClick} disabled={!hasPrev}>
        Previous
      </button>
      <button onClick={handleNextClick} disabled={!hasNext}>
        Next
      </button>
      <h3>
        ({index + 1} / {nameList.length})
      </h3>
      {<p>{name.des}</p>}
    </>
  );
};
export default Gallery;
