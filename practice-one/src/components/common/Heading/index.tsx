// React
import { FC, ReactElement, memo } from "react";

// Type
import { THeading } from "../../../types";

// Helper
import { getFontSize } from "../../../helpers";

export type HeadingProps = {
  className?: string;
  element: THeading;
  children: React.ReactNode;
};

const Heading: FC<HeadingProps> = memo(
  ({ element, children, className }): ReactElement => {
    const headingStyles = {
      fontSize: getFontSize(element),
    };

    const HeadingTag = element;

    return (
      <HeadingTag className={`${className} font-family`} style={headingStyles}>
        {children}
      </HeadingTag>
    );
  }
);

export default Heading;
