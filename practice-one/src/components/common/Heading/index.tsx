// React
import { FC, ReactElement, memo } from "react";

// Helper
import { getFontSize } from "../../../helpers";

// Define props for heading
type HeadingProps = {
  className?: string;
  element: THeading;
  children: React.ReactNode;
};
type THeading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const Heading: FC<HeadingProps> = ({
  element,
  children,
  className,
}): ReactElement => {
  const headingStyles = {
    fontSize: getFontSize(element),
  };

  const HeadingTag = element;

  return (
    <HeadingTag className={`${className} font-family`} style={headingStyles}>
      {children}
    </HeadingTag>
  );
};

export default memo(Heading);
