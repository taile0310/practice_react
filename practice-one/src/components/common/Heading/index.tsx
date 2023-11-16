// React
import { memo } from "react";

// Type
import { THeading } from "../../../types/Heading";

// Helper
import { getFontSize } from "../../../helpers/FontSize";

export type HeadingProps = {
  className?: string;
  element: THeading;
  children: React.ReactNode;
};

const Heading: React.FC<HeadingProps> = memo(
  ({ element, children, className }): React.ReactElement => {
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
